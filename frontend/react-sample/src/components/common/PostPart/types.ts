import { Ref } from "react";
import { User } from "../../../constants/context";
import { UseFormResult } from "../../../lib/custom-hooks/useForm";
import { Callback, ID, SingleComment, SinglePost } from "../../../types";

export interface CommentItemProps {
  isThisUserComment: boolean
  postId: ID
  comment: SingleComment
}

export interface PostCommentFormProps {
  commentInputRef: Ref<HTMLInputElement>
  commentValue: string
  onChange: UseFormResult<any>['onChange']
  onSubmit: Callback
}

export interface PostContentProps {
  isThisUser: boolean
  user: User | null
  post: SinglePost
  onDeleteCallback: Callback
}

export interface PostPartProps extends PostCommentFormProps, Omit<PostContentProps, 'isThisUser'> {
}