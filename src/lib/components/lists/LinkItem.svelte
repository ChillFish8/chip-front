<script lang="ts">
    export let name;
    export let icon;
    export let href;

    import {Graphic, Item, Text} from "@smui/list";


    function onClick() {
        window.location.href = href;
    }
</script>

<Item on:SMUI:action={onClick}>
    <Graphic class="material-icons">{icon}</Graphic>
    <Text>{name}</Text>
</Item>