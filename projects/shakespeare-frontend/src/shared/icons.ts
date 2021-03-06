const star: string = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12.9 2.6l2.3 5c.1.3.4.5.7.6l5.2.8c.9 0 1.2 1 .6 1.6l-3.8 3.9c-.2.2-.3.6-.3.9l.9 5.4c.1.8-.7 1.5-1.4 1.1l-4.7-2.6c-.3-.2-.6-.2-.9 0l-4.7 2.6c-.7.4-1.6-.2-1.4-1.1l.9-5.4c.1-.3-.1-.7-.3-.9l-3.8-3.9C1.7 10 2 9 2.8 8.9L8 8.1c.3 0 .6-.3.7-.6l2.3-5c.5-.7 1.5-.7 1.9.1z"/>
  </svg>
`

const eye: string = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.821 12.43c-.083-.119-2.062-2.944-4.793-4.875C15.612 6.552 13.826 6 12 6c-1.825 0-3.611.552-5.03 1.555-2.731 1.931-4.708 4.756-4.791 4.875a1 1 0 000 1.141c.083.119 2.06 2.944 4.791 4.875C8.389 19.448 10.175 20 12 20c1.826 0 3.612-.552 5.028-1.555 2.731-1.931 4.71-4.756 4.793-4.875a.996.996 0 000-1.14zM12 16.5c-1.934 0-3.5-1.57-3.5-3.5 0-1.934 1.566-3.5 3.5-3.5 1.93 0 3.5 1.566 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5z"/>
    <path d="M14 13c0 1.102-.898 2-2 2a2 2 0 112-2z"/>
  </svg>
`

export type iconName =
  'star'
  | 'eye'

export const ICONS: Record<iconName, string> = { star, eye }
