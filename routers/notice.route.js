const NoticeModel = require("../models/notice.model");
const express = require("express");
const noticeRouter = express.Router();

noticeRouter.get("/", async (req, res) => {
  try {
    let notice = await NoticeModel.find();
    res.status(200).send(notice);
  } catch (error) {
    res.send(error.message);
  }
});
noticeRouter.post("/", async (req, res) => {
  try {
    req.body.date = new Date();
    console.log(req.body);
    let notice = new NoticeModel(req.body);
    await notice.save();
    res.status(200).send("notice created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
noticeRouter.patch("/:id", async (req, res) => {
  try {
    await NoticeModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("notice updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

noticeRouter.delete("/:id", async (req, res) => {
  try {
    await NoticeModel.findByIdAndDelete(req.params.id);
    res.status(200).send("notice deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = noticeRouter;
