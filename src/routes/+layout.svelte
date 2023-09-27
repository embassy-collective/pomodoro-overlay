<script>
  import Header from '$lib/components/molecules/header.svelte'
  import '../app.postcss'
</script>

<main class="h-screen justify-between flex flex-col">
  <Header />
  <slot />
</main>
