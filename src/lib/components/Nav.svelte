<script lang="ts">
    import List, {Item, Graphic, Separator, Text} from '@smui/list';
    import SignIn from "./buttons/SignIn.svelte";
</script>

<div class="bg-brand-darker shadow-hard-left w-full lg:w-1/4 h-24 lg:h-full lg:min-h-screen px-4 py-8"
     style="max-width: 350px">
    <div class="flex items-center justify-center space-x-4 w-full border-b border-brand-orange pb-4">
        <img class="w-10 h-10 rounded-full" src="/icons/logo.webp" alt=""/>
        <h1 class="text-2xl font-semibold mb-1">Chip Bot</h1>
    </div>
    <div class="mt-6">
        <SignIn/>
    </div>
    <div class="w-full mt-2">
        <List class="">
            <div class="my-4">
                <Separator/>
            </div>
            <Item>
                <Graphic class="material-icons">favorite</Graphic>
                <Text>Premium</Text>
            </Item>
            <div class="my-4">
                <Separator/>
            </div>
            <Item>
                <Graphic class="material-icons">list</Graphic>
                <Text>Commands</Text>
            </Item>
            <Item>
                <Graphic class="material-icons">group_add</Graphic>
                <Text>Join Our Discord</Text>
            </Item>
            <div class="my-4">
                <Separator/>
            </div>
            <Item>
                <img class="w-6 h-6 rounded-full object-contain mr-8" src="/icons/logo.webp" alt=""/>
                <Text>Invite Chip</Text>
            </Item>
            <Item>
                <img class="w-6 h-6 rounded-full object-contain mr-8" src="/icons/logo_red.webp" alt=""/>
                <Text>Invite Chip 2</Text>
            </Item>
            <Item>
                <img class="w-6 h-6 rounded-full object-contain mr-8" src="/icons/logo_yellow.webp" alt=""/>
                <Text>Invite Chip 3</Text>
            </Item>
            <Item>
                <img class="w-6 h-6 rounded-full object-contain mr-8" src="/icons/logo_blue.webp" alt=""/>
                <Text>Invite Chip Beta</Text>
            </Item>
        </List>
    </div>
</div>