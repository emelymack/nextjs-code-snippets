'use client';

import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from '@/actions/snippetActions';

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div className="py-20">
      <Editor
        height={"40vh"}
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  )
}
