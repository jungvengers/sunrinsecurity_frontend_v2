import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('NoticePage', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(Header, {
            stubs: ['router-link']
        });
        console.log(wrapper);
        expect(wrapper.vm).toBeTruthy();
    });
});
