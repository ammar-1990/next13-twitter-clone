"use client";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { safeUser } from "@/types";
import React, { useCallback, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {
  currentUser: safeUser | null;
  isComment?:boolean
  placeholder:string,
  postId?:string
};

const PostForm = ({ currentUser,isComment,placeholder ,postId}: Props) => {
  const registerModl = useRegisterModal();
  const loginModal = useLoginModal();
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false)
const router = useRouter()
const handleSubmit = useCallback(async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
setIsLoading(true)
const url = isComment ? `/api/comments/${postId}` :'/api/posts'
try {
    await axios.post(url,{body})
  isComment? toast.success('Comment added') :  toast.success('Post added')
   
    setBody('')
    router.refresh()

} catch (error:any) {
    console.log(error)
    toast.error(error.response.data)
} finally{
    setIsLoading(false)
}
},[body,isComment,postId])

  return (
    <div className=" border-b border-neutral-800 p-3">
      {!currentUser ? (
        <div className="flex flex-col gap-4 items-center">
          <p className="text-white font-bold text-2xl">Welcome to Twitter!</p>
          <div className="flex items-center gap-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModl.onOpen} secondary />
          </div>
        </div>
      ) : (
        <div className="p-4">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4">
            <Image
              src={currentUser.profileImage as string || '/images/placeholder.png'}
              alt="profile image"
              width={100}
              height={100}
              className="rounded-full object-contain cursor-pointer border border-white w-12 h-12"
            />
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={placeholder}
              className="flex-1 outline-none bg-transparent caret-slate-500 text-white px-2"
            />
            </div>
        
         
          <div className="flex justify-end">
            <Button disabled={isLoading} label="Tweet" />
          </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostForm;
