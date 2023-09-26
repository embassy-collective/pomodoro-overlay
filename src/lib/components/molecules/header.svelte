<script>
  import Logo from '../atoms/logo.svelte'
  import MainNav from './main-nav.svelte'
  import UserNav from './user-nav.svelte'
</script>

<div class="container">
  <div class="flex h-16 items-center px-4">
    <Logo />
    <div class="ml-auto flex items-center space-x-4">
      <MainNav class="mx-6" />
      <UserNav />
    </div>
  </div>
</div>
