export default () => {
  return (
    <footer py-8 op-80>
      <p text-center text-sm text-neutral-400>
        <span pr-1>Assets are from</span>
        <a pr-1
          text-neutral-400 border-b border-neutral-400 border-dotted
          hover:text-violet-400
          href="https://github.com/microsoft/fluentui-emoji" target="_blank"
        >
          Fluent Emoji
        </a>
        <span pr-1>by Microsoft. Remixed and partially modified.</span>
      </p>
      <p mt-1 text-center text-sm text-neutral-400>
        <span pr-1>Made with ♥ by</span>
        <a
          text-neutral-400 border-b border-neutral-400 border-dotted
          hover:text-violet-400
          href="https://lrmn.is-a.dev/" target="_blank"
        >
          L RMN
        </a>
      </p>
    </footer>
  )
}
