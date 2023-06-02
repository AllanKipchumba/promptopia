import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//create a new prompt
export const POST = async (req, res) => {
  //access data  from client
  const { userId, prompt, tag } = await req.json();

  //save data to DB
  try {
    /*
    we connect to the db everytime because it is a lambda function,
    it isgoing to 'die' once it does its job. Every time it is called,
     it needs to connect to the db and then 'go in peace'
    */
    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to creste a new prompt", { status: 500 });
  }
};
