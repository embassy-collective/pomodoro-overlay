<script lang="ts">
    import { browser } from '$app/environment'
    import { Moon, Sun } from 'svelte-radix'
    import Button from '../ui/button/button.svelte'

    let darkMode = true;

    const  handleSwitchDarkMode = () => {
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }

    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>

<Button on:click={handleSwitchDarkMode} variant={"outline"}>
    {#if darkMode}
        <Sun />
    {:else}
        <Moon />
    {/if}
</Button>

