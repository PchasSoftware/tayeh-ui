<template>
    <div class="ty-tabs">
        <ul role="tablist" class="ty-tabs-list mb-2 px-0">
            <li
                v-for="(tab, i) in tabs"
                :key="i"
                :class="{ 'fw-bolder': tab.isActive, 'is-active': tab.isActive, 'is-disabled': tab.disabled, [`ty-border-color-${tab.borderColor}`]: tab.isActive }"
                :style="{opacity: tab.isActive?1:opacity}"
                class="ty-tab-item pb-2"
                role="presentation"
                v-show="tab.isVisible"
            >
                <a v-html="tab.header"
                   :aria-controls="tab.hash"
                   :aria-selected="tab.isActive"
                   @click="selectTab(tab.hash, $event)"
                   :href="tab.hash"
                   :class="['ty-tab-item-link', 'mx-3']"
                   role="tab"
                ></a>
            </li>
        </ul>
        <div class="tabs-component-panels">
            <slot/>
        </div>
    </div>
</template>

<script>
    import expiringStorage from '../../utils/expiringStorage';
    export default {
        name: 'TyTabs',
        props: {
            cacheLifetime: {
                default: 5,
            },
            opacity: {
                type: [String, Number],
                default: 1 
            },
            options: {
                type: Object,
                required: false,
                default: () => ({
                    useUrlFragment: false,
                    defaultTabHash: null,
                }),
            },
        },
        data: () => ({
            tabs: [],
            activeTabHash: '',
            activeTabIndex: 0,
            lastActiveTabHash: '',
        }),
        computed: {
            storageKey() {
                return `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;
            },
        },
        created() {
            this.tabs = this.$children;
        },
        mounted() {
            window.addEventListener('hashchange', () => this.selectTab(window.location.hash));
            if (this.findTab(window.location.hash)) {
                this.selectTab(window.location.hash);
                return;
            }
            const previousSelectedTabHash = expiringStorage.get(this.storageKey);
            if (this.findTab(previousSelectedTabHash)) {
                this.selectTab(previousSelectedTabHash);
                return;
            }
            if(this.options.defaultTabHash !== null && this.findTab("#" + this.options.defaultTabHash)) {
                this.selectTab("#" + this.options.defaultTabHash);
                return;
            }
            if (this.tabs.length) {
                this.selectTab(this.tabs[0].hash);
            }
        },
        methods: {
            findTab(hash) {
                return this.tabs.find(tab => tab.hash === hash);
            },
            selectTab(selectedTabHash, event) {
                // See if we should store the hash in the url fragment.
                if (event && !this.options.useUrlFragment) {
                    event.preventDefault();
                }
                const selectedTab = this.findTab(selectedTabHash);
                if (! selectedTab) {
                    return;
                }
                if (selectedTab.disabled) {
                    event.preventDefault();
                    return;
                }
                if (this.lastActiveTabHash === selectedTab.hash) {
                    this.$emit('clicked', { tab: selectedTab });
                    return;
                }
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.hash === selectedTab.hash);
                    tab.initialized = (tab.hash === selectedTab.hash)||tab.initialized;
                });
                this.$emit('changed', { tab: selectedTab });
                this.activeTabHash = selectedTab.hash;
                this.activeTabIndex = this.getTabIndex(selectedTabHash);
                this.lastActiveTabHash = this.activeTabHash = selectedTab.hash;
                expiringStorage.set(this.storageKey, selectedTab.hash, this.cacheLifetime);
            },
            setTabVisible(hash, visible) {
                const tab = this.findTab(hash);
                if (! tab) {
                    return;
                }
                tab.isVisible = visible;
                if (tab.isActive) {
                    // If tab is active, set a different one as active.
                    tab.isActive = visible;
                    this.tabs.every((tab, index, array) => {
                        if (tab.isVisible) {
                            tab.isActive = true;
                            return false;
                        }
                        return true;
                    });
                }
            },
            
            getTabIndex(hash){
            	const tab = this.findTab(hash);
            	
            	return this.tabs.indexOf(tab);
            },
            
			getTabHash(index){
            	const tab = this.tabs.find(tab => this.tabs.indexOf(tab) === index);
            	
            	if (!tab) {
					return;
                }
                
                return tab.hash;
			},
            
            getActiveTab(){
            	return this.findTab(this.activeTabHash);
            },
            
			getActiveTabIndex() {
            	return this.getTabIndex(this.activeTabHash);
            },
        },
    };
</script>