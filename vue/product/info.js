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
        '      <select name="cno4" class="custom-select" size=10>\n' +
        '        <option v-for="(option, index) in detailCategory"\n' +
        '                :key="index" :value="index">\n' +
        '          {{ option.text }}\n' +
        '        </option>\n' +
        '      </select>\n' +
        '    </div>\n' +
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
            detailCategory: [],
        };
    },
    created: function() {
        this.largeCategory = JSON.parse(sessionStorage.getItem('Prod_Cate_Large'));
    },
    watch: {
        largeCateSel: function() {
            let allMiddleCate = JSON.parse(sessionStorage.getItem('Prod_Cate_Middle'));
            this.middleCategory = allMiddleCate[this.largeCateSel];
            this.smallCategory = [];
            this.detailCategory = [];
        },
        middleCateSel: function() {
            let allSmallCate = JSON.parse(sessionStorage.getItem('Prod_Cate_Small'));
            this.smallCategory = allSmallCate[this.largeCateSel][this.middleCateSel];
            this.detailCategory = [];
        },
        smallCateSel: function() {
            let allSmallCate = JSON.parse(sessionStorage.getItem('Prod_Cate_Small'));
            let leaf = allSmallCate[this.largeCateSel][this.middleCateSel][this.smallCateSel]['leaf'];

            if (leaf == 'T') {
                let allDetailCate = JSON.parse(sessionStorage.getItem('Prod_Cate_Detail'));
                this.detailCategory = allDetailCate[this.largeCateSel][this.middleCateSel][this.smallCateSel];
            } else {
                this.detailCategory = [];
            }
        }
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
