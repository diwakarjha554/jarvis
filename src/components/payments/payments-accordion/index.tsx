'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function Accordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <div className={`flex flex-col gap-5`}>
        <AccordionItem value="item-1" className={`border-none`}>
          <AccordionTrigger className={`hover:no-underline bg-gray-200 dark:bg-gray-800 px-5 rounded-md`}>
              Pay in Account
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 border-[0.125rem] rounded-md border-border">
              <div className={`p-12`}>
                <div className={`text-custom-clp font-semibold text-[18px]`}>
                  <span>Pay the amount in below given account:</span>
                </div>
                <div className={`text-[17px] mt-5 flex flex-col gap-2`}>
                  <div>
                    <span className={`font-[500]`}>Bank Name: </span>
                    <span>IndusInd Bank</span>
                  </div>
                  <div>
                    <span className={`font-[500]`}>Account No: </span>
                    <span>259625992025</span>
                  </div>
                  <div>
                    <span className={`font-[500]`}>Account Name: </span>
                    <span>Travel Trail Holidays Private Limited</span>
                  </div>
                  <div>
                    <span className={`font-[500]`}>IFSC Code: </span>
                    <span>INDB0000735</span>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-2" className={`border-none`}>
          <AccordionTrigger className={`hover:no-underline bg-custom-shl dark:bg-custom-phd px-5 rounded-md`}>
            Scan & Pay
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 border-[0.125rem] rounded-md border-border">
              <div className={`p-12`}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </div>
            </div>
          </AccordionContent>
        </AccordionItem> */}
      </div>
    </Accordion>
  )
}
