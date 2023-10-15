import React from 'react'


import '@mdxeditor/editor/style.css'
import {
  // plugins
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  thematicBreakPlugin,
  quotePlugin,
  linkPlugin,
  linkDialogPlugin,
  markdownShortcutPlugin,
  tablePlugin,
  // Mdx
  MDXEditor,
  // Components
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  InsertCodeBlock,
  InsertTable,
  codeBlockPlugin,
  codeMirrorPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage
} from '@mdxeditor/editor'

const defaultArduinoCode = `
void setup() {
  // Inicializa el código de configuración
}

void loop() {
  // Código principal del bucle
}
`.trim();

function App({setMdxContent}) {
  return (
    <MDXEditor
      // onChange={}
      onChange={(newContent) => {
        // Actualiza el estado cuando el contenido cambia
        setMdxContent(newContent);
      }}
      markdown='Eliseo'
      contentEditableClassName="prose"
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BlockTypeSelect />
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              {/* <InsertTable  /> */}
              <CreateLink />
              {/* <InsertCodeBlock /> */}
              <ConditionalContents
                options={[
                  { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
                  {
                    fallback: () => (<>
                      <InsertCodeBlock />
                    </>)
                  }
                ]}
              />
            </>)
        }),
        headingsPlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
        quotePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        markdownShortcutPlugin(),
        // tablePlugin,
        codeBlockPlugin({ defaultCodeBlockLanguage: 'arduino'}),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', arduino: 'arduino' }}),
      ]}

    />
  )
}

export default App