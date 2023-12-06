// import {$getRoot, $getSelection} from 'lexical';
import {useEffect, useState} from "react";

import {LexicalComposer} from "@lexical/react/LexicalComposer";
// import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
// import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';

import {TableCellNode, TableNode, TableRowNode} from "@lexical/table";
import TableCellActionMenuPlugin from "./plugins/TableActionMenuPlugin";
import TableCellResizer from "./plugins/TableCellResizer";
import ExampleTheme from "./themes/ExampleTheme";
import TableToolbarPlugin from "./plugins/TableToolbar";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import {TableContext} from "./plugins/TablePlugin";
import { $generateHtmlFromNodes } from "@lexical/html";
import { LexicalEditor } from "lexical/LexicalEditor";
import { EditorState } from "lexical/LexicalEditorState";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";

// const theme = {
//   // Theme styling goes here
//   // ...
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Editor({setEditorHtml}) {

  const [floatingAnchorElem, setFloatingAnchorElem] = useState<unknown>(null);

  const onRef = (_floatingAnchorElem: unknown) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const onChange = (editorState: EditorState, editor: LexicalEditor) => {
    editor.update(() => {
      const raw = $generateHtmlFromNodes(editor, null)
      setEditorHtml(raw)
    })
  }

  // Lexical React plugins are React components, which makes them
  // highly composable. Furthermore, you can lazy load plugins if
  // desired, so you don't pay the cost for plugins until you
  // actually use them.
  function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      // Focus the editor when the effect fires!
      editor.focus();
    }, [editor]);

    return null;
  }

  // // Catch any errors that occur during Lexical updates and log them
  // // or throw them as needed. If you don't throw them, Lexical will
  // // try to recover gracefully without losing user data.
  // function onError(error: any) {
  //   console.error(error);
  // }

  const editorConfig = {
    theme: ExampleTheme,
    onError: (error:unknown) => {
      throw error;
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode
    ],
    namespace: "editor-test",
  };

  function Placeholder() {
    return (
      <div className="editor-placeholder">
        Play around with the table plugin...
      </div>
    );
  }  

  return (
    <>
    <LexicalComposer initialConfig={editorConfig}>
      <TableContext>
        <>
        <div className="editor-container">
          <ToolbarPlugin />
          <TableToolbarPlugin />
          <TablePlugin />
          <TableCellResizer />

          <RichTextPlugin
          ErrorBoundary={LexicalErrorBoundary}
            contentEditable={
              <div className="editor-input">
                <div className="editor" ref={onRef}>
                  <ContentEditable className={"ContentEditable__root"} />
                </div>
              </div>
            }
            placeholder={<></>}
          />
        </div>

          <>
            <TableCellActionMenuPlugin />
          </>
        </>
      </TableContext>
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
      <OnChangePlugin onChange={onChange} ignoreSelectionChange />
    </LexicalComposer>
  </>);
}

export default Editor;
