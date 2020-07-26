Vue.component('prod-base', {
    template:
        '<div>\n' +
        '  <div class="form-group input-group">\n' +
        '    <div class="col-sm-2">\n' +
        '      상품명\n' +
        '    </div>\n' +
        '    <div class="col-sm-10">\n' +
        '      <input type="text" class="form-control" placeholder="상품명을 입력해주세요">\n' +
        '    </div>\n' +
        '  </div>\n' +
        '  <prod-base-cate />\n' +
        '</div>',
});

Vue.component('prod-base-cate', {
    template:
        '<div>\n' +
        '  <div class="form-group input-group">\n' +
        '    <div class="col-sm-2">\n' +
        '      카테고리\n' +
        '    </div>\n' +
        '    <div class="col-sm-2">\n' +
        '      <select name="cno1" class="custom-select" v-on:change="changeCNo1($event)">\n' +
        '        <option v-for="(option, index) in largeCategory"\n' +
        '                v-bind:key="index" v-bind:value="option.value">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
        '    <div class="col-sm-2">\n' +
        '      <select name="cno2" class="custom-select" v-on:change="changeCNo2($event)">\n' +
        '        <option v-for="(option, index) in middleCategory"\n' +
        '                v-bind:key="index" v-bind:value="option.value">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
        '    <div class="col-sm-2">\n' +
        '      <select name="cno3" class="custom-select">\n' +
        '        <option v-for="(option, index) in smallCategory"\n' +
        '                v-bind:key="index" v-bind:value="option.value">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>',
    data() {
        return {
            largeCategory: [
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
                { text: 'Three', value: '3' },
            ],
            middleCategory: [],
            smallCategory: [],
        };
    },
    methods: {
        changeCNo1(event) {
            this.middleCategory = [];
            this.smallCategory = [];
            if (event.target.value === '1') {
                this.middleCategory.push({ text: 'A', value: '1' });
                this.middleCategory.push({ text: 'B', value: '2' });
                this.middleCategory.push({ text: 'C', value: '3' });
            } else if (event.target.value === '2') {
                this.middleCategory.push({ text: '가', value: '1' });
                this.middleCategory.push({ text: '나', value: '2' });
                this.middleCategory.push({ text: '다', value: '3' });
            } else if (event.target.value === '3') {
                this.middleCategory.push({ text: '#1', value: '1' });
                this.middleCategory.push({ text: '#2', value: '2' });
                this.middleCategory.push({ text: '#3', value: '3' });
            }
        },
        changeCNo2(event) {
            this.smallCategory = [];
            if (event.target.value === '1') {
                this.smallCategory.push({ text: '하나', value: '1' });
                this.smallCategory.push({ text: '둘', value: '2' });
                this.smallCategory.push({ text: '셋', value: '3' });
            } else if (event.target.value === '2') {
                this.smallCategory.push({ text: '원', value: '1' });
                this.smallCategory.push({ text: '투', value: '2' });
                this.smallCategory.push({ text: '쓰리', value: '3' });
            } else if (event.target.value === '3') {
                this.smallCategory.push({ text: '이치', value: '1' });
                this.smallCategory.push({ text: '니', value: '2' });
                this.smallCategory.push({ text: '산', value: '3' });
            }
        },
    },
});
