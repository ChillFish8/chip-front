<script>
    import '../scyle.css';
    import Nav from "../lib/components/Nav.svelte";
</script>

<main class="flex flex-col lg:flex-row w-full min-h-screen transition-all duration-150 overflow-x-hidden">
    <Nav/>
    <div class="flex flex-col w-full min-h-screen p-8">
        <slot/>
    </div>
</main>