import express from "express";
import dotenv from "dotenv";
import { Education, Technology, Health } from "./data.js";
import cors from "cors";

const app = express();
dotenv.config();

const Healthdata = Health.split("?");
const EducationData = Education.split("?");
const TechnologyData = Technology.split("?");

app.get("/api/v1/surveyquestion/:question", cors(), (req, res) => {
    let data;
    if (req.params.question == "Health") data = Healthdata;
    if (req.params.question == "Education") data = EducationData;
    if (req.params.question == "Technology") data = TechnologyData;

    res.status(200).json({
        data,
        status: "success",
    });
});
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("app listen");
});