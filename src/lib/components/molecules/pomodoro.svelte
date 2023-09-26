<script lang="ts">
    import { cn } from "$lib/utils"
    import CardContent from "../ui/card/card-content.svelte"
    import Card from "../ui/card/card.svelte"

    let className: string = ""
    export { className as class }
</script>


<Card class={cn("bg-slate-800", className)}>
    <CardContent>
        TODO
    </CardContent>
</Card>
