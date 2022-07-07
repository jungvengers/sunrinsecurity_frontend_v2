import { shallowMount } from '@vue/test-utils'
import notice from '@/pages/notice.vue'

describe('NoticePage', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(notice, {
            stubs: ['router-link']
        });
        expect(wrapper.vm).toBeTruthy();
    });
});

