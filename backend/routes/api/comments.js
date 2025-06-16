const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/:postId", async (req, res) => { 
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}
);

//add another comment that restore replying about 
router.post("/", async (req, res) => {
  const { postId, userId, content } = req.body;
  try {
    const newComment = new Comment({ postId, userId, content });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
});

router.delete("/:commentId", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.commentId);
        if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
    });

    router.put("/:commentId", async (req, res) => {
        const { content } = req.body;
        try {
            const updatedComment = await Comment.findByIdAndUpdate(
                req.params.commentId,
                { content },
                { new: true }
            );
            if (!updatedComment) {
                return res.status(404).json({ error: "Comment not found" });
            }
            res.status(200).json(updatedComment);
        } catch (error) {
            res.status(500).json({ error: "Failed to update comment" });
        }
    });