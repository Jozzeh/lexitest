import "../styles.css";
import type { EditorThemeClasses } from "lexical";

const ExampleTheme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
  quote: "editor-quote",
  heading: {
    h1: "editor-heading-h1",
    h2: "editor-heading-h2",
    h3: "editor-heading-h3",
    h4: "editor-heading-h4",
    h5: "editor-heading-h5"
  },
  list: {
    nested: {
      listitem: "editor-nested-listitem"
    },
    ol: "editor-list-ol",
    ul: "editor-list-ul",
    listitem: "editor-listitem"
  },
  image: "editor-image",
  link: "editor-link",
  text: {
    bold: "editor-text-bold",
    italic: "editor-text-italic",
    overflowed: "editor-text-overflowed",
    hashtag: "editor-text-hashtag",
    underline: "editor-text-underline",
    strikethrough: "editor-text-strikethrough",
    underlineStrikethrough: "editor-text-underlineStrikethrough",
    code: "editor-text-code"
  },
  table: "PlaygroundEditorTheme__table",
  tableAddColumns: "PlaygroundEditorTheme__tableAddColumns",
  tableAddRows: "PlaygroundEditorTheme__tableAddRows",
  tableCell: "PlaygroundEditorTheme__tableCell",
  tableCellActionButton: "PlaygroundEditorTheme__tableCellActionButton",
  tableCellActionButtonContainer:
    "PlaygroundEditorTheme__tableCellActionButtonContainer",
  tableCellEditing: "PlaygroundEditorTheme__tableCellEditing",
  tableCellHeader: "PlaygroundEditorTheme__tableCellHeader",
  tableCellPrimarySelected: "PlaygroundEditorTheme__tableCellPrimarySelected",
  tableCellResizer: "PlaygroundEditorTheme__tableCellResizer",
  tableCellSelected: "PlaygroundEditorTheme__tableCellSelected",
  tableCellSortedIndicator: "PlaygroundEditorTheme__tableCellSortedIndicator",
  tableResizeRuler: "PlaygroundEditorTheme__tableCellResizeRuler",
  tableSelected: "PlaygroundEditorTheme__tableSelected",
};

export default ExampleTheme;
