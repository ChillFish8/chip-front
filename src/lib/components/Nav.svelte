<script lang="ts">
    import List, {Item, Separator, Text} from '@smui/list';
    import SignIn from "./buttons/SignIn.svelte";
    import {PREMIUM_URL} from "$lib/api/config";
    import LinkItem from "./lists/LinkItem.svelte";

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
        <List>
            <div class="my-4">
                <Separator/>
            </div>
            <LinkItem icon="favorite" name="Premium" href={PREMIUM_URL}/>
            <div class="my-4">
                <Separator/>
            </div>
            <LinkItem icon="list" name="Commands" href="/commands"/>
            <LinkItem icon="group_add" name="Join Our Discord" href="/discord"/>
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