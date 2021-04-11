export default {
    value: {
        default: null
    },
    placeholder: {
        type: String,
        default: 'لطفا انتخاب کنید',
        required: false
    },
    lazyload: {
        type: Function,
        default: null,
        required: false
    },
    dir: {
        type: String,
        default: 'rtl'
    },
    size: {
        type: String,
        default: 'normal'
    },
    width: {
        type: [Number, String],
        default: 'auto'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        required: false
    },
    required: {
        type: Boolean,
        default: false
    },
    searchable: {
        type: Boolean,
        default: true
    },
    showDelete: {
        type: Boolean,
        default: false
    },
    permitCreate: {
        type: Boolean,
        default: false
    },
    showEdit: {
        type: Boolean,
        default: false
    },
    select: {
        type: Boolean,
        default: true
    },
    clearSearchOnBlur: {
        type: Boolean,
        default: true
    },
    emptyPlaceholderText: {
        type: String,
        default: 'گزینه ای برای انتخاب یافت نشد.'
    },
    showCancel: {
        type: Boolean,
        default: false
    }
}