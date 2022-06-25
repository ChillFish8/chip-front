<script lang="ts">
    import {goto} from "$app/navigation";
    import {Graphic, Item, Text} from "@smui/list";

    export let style = "";
    export let name;
    export let icon;
    export let href;
</script>

<Item on:SMUI:action={() => goto(href, { replaceState: false })} class="transition">
    <Graphic class="material-icons" {style}>{icon}</Graphic>
    <Text {style}>{name}</Text>
</Item>