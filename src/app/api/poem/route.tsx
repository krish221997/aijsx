/* eslint-disable react/no-unescaped-entities */
/** @jsxImportSource ai-jsx */

import { toStreamResponse } from 'ai-jsx/stream';
import { ChatCompletion, UserMessage } from 'ai-jsx/core/completion';
import { Inline } from "ai-jsx/core/inline";

export const runtime = 'edge';

export async function POST(req: Request) {

  const { topic } = await req.json();

  return toStreamResponse(
        <Inline>
    
    {'\n\n\n\nGive me a list of 5 similar animals.\n\n'}
    
      <ChatCompletion>
        <UserMessage>Imagine a forest animal called a "{topic}". Give me a list of 5 animals that are similar to this Animal.
        If it is a herbivore, list 5 herbivores. If it is an omnivore, list 5 omnivores. If it is a carnivore, list 5 carnivores.
        Only list 5 animals, not more. Be very specific.
        </UserMessage>
      </ChatCompletion>
   
    {'\n\n\n\nWrite a poem that includes all these animals.\n\n'}
    {(conversation) => {
        return (
            <ChatCompletion>
              <UserMessage>Now write a poem about each of these 5 animals. Each poem should be in a new line and should have a heading with the name of that animal: {conversation}</UserMessage>
            </ChatCompletion>
          )
    }}
  </Inline>
    // <Inline>

    //   {topic && (
    //     <ChatCompletion>
    //       <UserMessage>
    //         List 5 animals similar to {topic} (herbivorous, omnivorous, carnivorous). 
    //         Return each animal on a new line as a string.
    //       </UserMessage>
    //     </ChatCompletion>
    //   )}

    //   {(conversation: string) => {

    //     console.log("========= CONVERSATION =========");
    //     console.log(typeof)
    //     console.log(conversation);
        
    //     if (typeof conversation !== 'string') {
    //       throw new Error('Expected conversation to be a string');
    //     }

    //     return conversation.split('\n')
    //       .filter(a => a)
    //       .map(animal => (
    //         <ChatCompletion key={animal}>
    //           <UserMessage>
    //             Write a short poem about the {animal}.  
    //           </UserMessage>
    //         </ChatCompletion>
    //       ))
    //    }}

    // </Inline>
  );

}