var ProdInfoCate = {
    template:
        '<div>\n' +
        '  <div class="form-group input-group">\n' +
        '    <div class="col-sm-2">\n' +
        '      카테고리\n' +
        '    </div>\n' +
        '    <div class="col-sm-2">\n' +
        '      <select name="cno1" class="custom-select" size=10 v-model="largeCateSel">\n' +
        '        <option v-for="(option, index) in largeCategory"\n' +
        '                :key="index" :value="index">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
        '    <div class="col-sm-2">\n' +
        '      <select name="cno2" class="custom-select" size=10 v-model="middleCateSel">\n' +
        '        <option v-for="(option, index) in middleCategory"\n' +
        '                :key="index" :value="index">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
        '    <div class="col-sm-2">\n' +
        '      <select name="cno3" class="custom-select" size=10 v-model="smallCateSel">\n' +
        '        <option v-for="(option, index) in smallCategory"\n' +
        '                :key="index" :value="index">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
        '    <div class="col-sm-2">\n' +
        '      <select name="cno4" class="custom-select" size=10 v-model="detailCateSel">\n' +
        '        <option v-for="(option, index) in detailCategory"\n' +
        '                :key="index" :value="index">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '  <div class="input-group">\n' +
        '    <div class="col-sm-2">&nbsp;</div>\n' +
        '    <div :class="currCateCheck">선택 카테고리 : <span>{{ currCategory }}</span></div>\n' +
        '  </div>\n' +
        '</div>',
    data: function() {
        return {
            largeCateSel: 0,
            largeCategory: [],
            middleCateSel: 0,
            middleCategory: [],
            smallCateSel: 0,
            smallCategory: [],
            detailCateSel: 0,
            detailCategory: [],

            allLargeCate: [],
            allMiddleCate: [],
            allSmallCate: [],
            allDetailCate: [],

            currCategory: '',
            currCateCheck: 'col-sm-10',
        };
    },
    created: function() {
        this.allLargeCate   = JSON.parse(sessionStorage.getItem('Prod_Cate_Large'));
        this.allMiddleCate  = JSON.parse(sessionStorage.getItem('Prod_Cate_Middle'));
        this.allSmallCate   = JSON.parse(sessionStorage.getItem('Prod_Cate_Small'));
        this.allDetailCate  = JSON.parse(sessionStorage.getItem('Prod_Cate_Detail'));

        this.largeCategory  = this.allLargeCate;
    },
    watch: {
        largeCateSel: function() {
            let leaf = this.allLargeCate[this.largeCateSel]['leaf'];
            this.middleCategory = this.allMiddleCate[this.largeCateSel];
            this.smallCategory = [];
            this.detailCategory = [];

            this.currCateCheck = (leaf == 'T') ? 'col-sm-10' : 'col-sm-10 font-weight-bold';
            this.currCategory = this.allLargeCate[this.largeCateSel]['text'];
        },
        middleCateSel: function() {
            let leaf = this.allMiddleCate[this.largeCateSel][this.middleCateSel]['leaf'];
            this.smallCategory = this.allSmallCate[this.largeCateSel][this.middleCateSel];
            this.detailCategory = [];

            this.currCateCheck = (leaf == 'T') ? 'col-sm-10' : 'col-sm-10 font-weight-bold';
            this.currCategory =
                this.allLargeCate[this.largeCateSel]['text'] + ' > ' +
                this.allMiddleCate[this.largeCateSel][this.middleCateSel]['text'];
        },
        smallCateSel: function() {
            let leaf = this.allSmallCate[this.largeCateSel][this.middleCateSel][this.smallCateSel]['leaf'];

            this.currCateCheck = (leaf == 'T') ? 'col-sm-10' : 'col-sm-10 font-weight-bold';
            this.currCategory =
                this.allLargeCate[this.largeCateSel]['text'] + ' > ' +
                this.allMiddleCate[this.largeCateSel][this.middleCateSel]['text'] + ' > ' +
                this.allSmallCate[this.largeCateSel][this.middleCateSel][this.smallCateSel]['text']

            if (leaf == 'T') {
                this.detailCategory = this.allDetailCate[this.largeCateSel][this.middleCateSel][this.smallCateSel];
            } else {
                this.detailCategory = [];
            }
        },
        detailCateSel: function() {
            this.currCateCheck = 'col-sm-10 font-weight-bold';
            this.currCategory =
                this.allLargeCate[this.largeCateSel]['text'] + ' > ' +
                this.allMiddleCate[this.largeCateSel][this.middleCateSel]['text'] + ' > ' +
                this.allSmallCate[this.largeCateSel][this.middleCateSel][this.smallCateSel]['text'] + ' > ' +
                this.allDetailCate[this.largeCateSel][this.middleCateSel][this.smallCateSel][this.detailCateSel]['text'];
        },
    },
}

var ProdInfo = {
    template:
        '<div>\n' +
        '  <prod-info-cate />\n' +
        '</div>',
    components: {
        'prod-info-cate' : ProdInfoCate,
    },
};
