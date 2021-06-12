<script lang="ts">
  export let name: string

  let windowMode: 'login' | 'register' | null = null

</script>

<main>
  <h1>Hello {name}!</h1>
  <p>{windowMode}</p>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <a on:click={() => { windowMode = 'login' }}>login</a>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
