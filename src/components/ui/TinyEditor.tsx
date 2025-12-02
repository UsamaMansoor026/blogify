import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/models/dom";

import "tinymce/plugins/advlist";
import "tinymce/plugins/autolink";
import "tinymce/plugins/lists";
import "tinymce/plugins/link";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/code";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/table";
import "tinymce/plugins/help";
import "tinymce/plugins/wordcount";

import "tinymce/skins/ui/oxide/skin.min.css";

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const TinyEditor = () => {
  const editorRef = useRef<any>(null);

  const handleEditorChange = (content: string) => {
    console.log("Editor content:", content);
  };

  return (
    <div className="bg-nav p-4 rounded-lg">
      <Editor
        licenseKey="gpl"
        onInit={(_, editor) => (editorRef.current = editor)}
        initialValue=""
        onEditorChange={handleEditorChange}
        init={{
          skin: "oxide-dark",
          content_css: "dark",

          height: 400,
          menubar: false,

          plugins: [
            "advlist",
            "lists",
            "autolink",
            "link",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "table",
            "help",
            "wordcount",
          ],

          toolbar:
            "undo redo | blocks | bold italic underline | " +
            "bullist numlist | removeformat | help",

          // Headings H1-H6 (blocks dropdown)
          block_formats:
            "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6",

          content_style: `
            body {
              background-color: #1c1619 !important;
              color: #f0ebec !important; 
            //   padding: 12px;
            }
            h1, h2, h3, h4, h5, h6 {
              color: #ffffff !important;
            }
            p {
              color: #f0ebec !important;
            }
          `,
        }}
      />
    </div>
  );
};

export default TinyEditor;
