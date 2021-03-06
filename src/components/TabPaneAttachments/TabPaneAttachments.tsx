import React from "react";
import { AttachmentLink } from "../UI/AttachmentLink";

interface TabPaneAttachmentsProps {
  attachments: {
    filename: string;
    data: string;
    type: string;
  }[];
}

export const TabPaneAttachments = ({ attachments }: TabPaneAttachmentsProps) => {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-4">
        {attachments.map(({ filename, data, type }, index) => (
          <div className="w-1/2 lg:w-1/3 xl:w-1/4 mb-3 px-4" key={index}>
            <AttachmentLink filename={filename} data={data} type={type} />
          </div>
        ))}
      </div>
    </div>
  );
};
