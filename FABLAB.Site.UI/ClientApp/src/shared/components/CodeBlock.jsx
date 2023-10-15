import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import arduino from 'react-syntax-highlighter/dist/esm/languages/prism/arduino'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { 
  BiMoon as MoonIcon, 
  BiSun as SunIcon,  
  BiCopy as CopyIcon,
  BiCheckCircle as PasteIcon
} from 'react-icons/bi'
// import { HiMiniClipboardDocumentCheck as PasteIcon} from 'react-icons/hi2'

export const Code = ({ children, isDark, setIsDark }) => {
  const [isCopied, setIsCopied] = useState(false)

  SyntaxHighlighter.registerLanguage('arduino', arduino);

  const setCopied = () => {
    setIsCopied(true)
    setTimeout(() => { setIsCopied(false) }, 1000);
  }

  return (
    <div className="code">
      <div className="code__icons">
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? <MoonIcon /> : <SunIcon className="dark__icon"/>}
        </button>

        <CopyToClipboard text={children}>
          <button onClick={() => setCopied()}>
            {isCopied
              ? <span title="Copiado!"><PasteIcon className={!isDark ? 'dark__icon': null}/></span>
              : <span title="Copiar al portapapeles"><CopyIcon className={!isDark ? 'dark__icon': null}/></span>
            }
          </button>
        </CopyToClipboard>
      </div>

      <SyntaxHighlighter className="code__container" language="arduino" style={isDark ? materialDark : materialLight}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}