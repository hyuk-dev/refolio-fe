'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Code,
  Heading2,
  Heading3,
  Quote,
  Undo2,
  Redo2,
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = '내용을 입력하세요',
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
      {/* 툴바 */}
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-2">
        {/* 텍스트 포맷 */}
        <div className="flex gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('bold')
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="굵게 (Cmd+B)"
          >
            <Bold size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('italic')
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="기울임 (Cmd+I)"
          >
            <Italic size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('codeBlock')
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="코드 (Cmd+Alt+C)"
          >
            <Code size={18} />
          </button>
        </div>

        {/* 제목 */}
        <div className="flex gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('heading', { level: 2 })
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="제목2 (Cmd+Alt+2)"
          >
            <Heading2 size={18} />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('heading', { level: 3 })
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="제목3 (Cmd+Alt+3)"
          >
            <Heading3 size={18} />
          </button>
        </div>

        {/* 리스트 */}
        <div className="flex gap-1 border-r border-gray-300 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('bulletList')
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="글머리 목록 (Cmd+Shift+8)"
          >
            <List size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('orderedList')
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="번호 목록 (Cmd+Shift+7)"
          >
            <ListOrdered size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded hover:bg-gray-200 transition ${
              editor.isActive('blockquote')
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-600'
            }`}
            title="인용구 (Cmd+Shift+B)"
          >
            <Quote size={18} />
          </button>
        </div>

        {/* 실행 취소 / 다시 실행 */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="p-2 rounded hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"
            title="실행 취소 (Cmd+Z)"
          >
            <Undo2 size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="p-2 rounded hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"
            title="다시 실행 (Cmd+Shift+Z)"
          >
            <Redo2 size={18} />
          </button>
        </div>
      </div>

      {/* 에디터 */}
      <div className="p-4">
        <EditorContent
          editor={editor}
          className="prose prose-sm max-w-none focus:outline-none min-h-96"
        />
      </div>

      {/* 글자 수 표시 */}
      <div className="bg-gray-50 border-t border-gray-300 px-4 py-2 text-xs text-gray-500">
        {editor.getText().length} 글자
      </div>
    </div>
  );
}
