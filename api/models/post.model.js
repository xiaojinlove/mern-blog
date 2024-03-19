import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fhow-to-write-a-blog-post&psig=AOvVaw2GUUNoXBO5lMpcctKaMK_d&ust=1710938027541000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjkofyqgIUDFQAAAAAdAAAAABAE"
    },
    category: {
        type: String,
        default: "uncategorized"
    },
    slug: {
      type: String,
      required: true,
      unique: true
    }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export default Post

