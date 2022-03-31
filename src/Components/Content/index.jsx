import { Typography, Divider } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import styles from "./index.module.css";
import "./index.css";
import { IData } from "../../shared/types/Answer";
import { FC, useRef } from "react";
const { Title, Text } = Typography;

const Content = ({ topics }) => {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <div className={styles.container}>
      {/* {topics.map((el) => (
        <div key={el.id}>
          <Title className={styles.title} id={el.title}>
            {el.title}
          </Title>
          {el.questions.map((item) => (
            <div className={styles.item}>
              <Title
                level={3}
                id={item.title}
              >{`${item.id}. ${item.title}`}</Title>
              <Divider />
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              />
            </div>
          ))}
        </div>
      ))} */}
      <Editor
        apiKey="4o02j0aunur2l6g2w3m30zz9okx9q8lr41icw124qjc782en"
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menu: {
            file: {
              title: "File",
              items: "newdocument restoredraft | preview | print ",
            },
            edit: {
              title: "Edit",
              items: "undo redo | cut copy paste | selectall | searchreplace",
            },
            view: {
              title: "View",
              items:
                "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen",
            },
            insert: {
              title: "Insert",
              items:
                "image link template codesample | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime",
            },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat",
            },
            tools: {
              title: "Tools",
              items: "spellchecker spellcheckerlanguage | code wordcount",
            },
          },
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media paste wordcount",
          ],
          toolbar:
            "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent",
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Content;
