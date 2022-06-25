<script lang="ts">
    import {page} from'$app/stores';
    import List, {Item, Separator, Text} from '@smui/list';
    import SignIn from "./buttons/SignIn.svelte";
    import {PREMIUM_URL} from "$lib/api/config";
    import LinkItem from "./lists/LinkItem.svelte";
    import {Hamburger} from "svelte-hamburgers";

    let menuOpen = false;
    page.subscribe(() => {
        menuOpen = false;
    });
</script>

<div class="absolute lg:relative top-0 left-0 bg-brand-darker shadow-md lg:shadow-hard-left w-full lg:w-1/4 max-w-none lg:max-w-300 {menuOpen && 'min-h-screen'} lg:h-full lg:min-h-screen px-0 lg:px-4 pb-2 pt-4 lg:py-8 z-50">
    <div class="flex items-center justify-between lg:justify-center w-full border-b border-brand-orange pb-4 px-4 lg:px-0">
        <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src="/icons/logo.webp" alt=""/>
            <h1 class="text-2xl font-semibold mb-1">Chip Bot</h1>
        </div>
        <div class="block lg:hidden">
            <Hamburger
                --color="white"
                bind:open={menuOpen}
                type="emphatic"
            />
        </div>
    </div>
    <div class="{menuOpen ? 'block' : 'hidden'} lg:block mt-6 mx-8 lg:mx-0">
        <SignIn/>
    </div>
    <div class="{menuOpen ? 'block' : 'hidden'} lg:block w-full mt-2 lg:min-h-0">
        <List>
            <div class="my-4">
                <Separator/>
            </div>
            <LinkItem icon="favorite" name="Premium" class="text-red" href={PREMIUM_URL} style="color: #EF4444 !important;"/>
            <div class="my-4">
                <Separator/>
            </div>
            <LinkItem icon="house" name="Home" href="/"/>
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