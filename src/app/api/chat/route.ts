import { NextResponse } from "next/server";
import natural from "natural";
import { responses, trainingData } from "@/src/stataic";

const classifier = new natural.BayesClassifier();

// Train the classifier
trainingData.forEach((item) => {
  classifier.addDocument(item.text, item.label);
});
classifier.train();

export async function POST(request: Request) {
  const { text } = await request.json();
  const predictedLabel = classifier.classify(text);
  const response =
    //@ts-expect-error gaattau
    responses[predictedLabel] || "I'm not sure how to answer that.";

  return NextResponse.json({ response });
}
