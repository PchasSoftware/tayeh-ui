import Vue from 'vue'
import { ComponentOptions, PluginFunction } from 'vue'

declare class TayehUi {
    static install: PluginFunction<never>;
}

declare namespace TayehUi {
    interface options {
        constructorCallback?: () => void;
        connectedCallback?: () => void;
        disconnectedCallback?: () => void;
        attributeChangedCallback?: (name: string, oldValue: any, value: any) => void;
        beforeCreateVueInstance?: (rootElement: ComponentOptions<Vue>) => ComponentOptions<Vue> | Promise<ComponentOptions<Vue>>;
        vueInstanceCreatedCallback?: () => void;
        destroyTimeout?: number;
        props?: ComponentOptions<Vue>['props'];
        shadow?: boolean;
        shadowCss?: string;
    }
}

declare module 'vue/types/vue' {
    export interface VueConstructor {
        customElement(tag: string, componentDefinition: ComponentOptions<Vue>, options?: TayehUi.options): void;
        customElement(tag: string, singleFileComponent: VueConstructor<Vue>, options?: TayehUi.options): void;
        customElement(tag: string, asyncComponentDefinition: () => Promise<ComponentOptions<Vue>>, options?: TayehUi.options): void;
    }

}
export default TayehUi