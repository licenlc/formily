import React from 'react'
import ReactDOM from 'react-dom'
import App from './index'
const dataSource = [
  {
    '': {
      pristine: false,
      valid: true,
      invalid: false,
      loading: false,
      validating: false,
      initialized: true,
      submitting: false,
      errors: [],
      warnings: [],
      values: {
        aa: true,
        cc: true,
        gg: 'aaaa'
      },
      initialValues: {
        aa: true,
        cc: true
      },
      mounted: true,
      unmounted: false,
      props: {},
      displayName: 'FormState'
    },
    block: {
      name: 'block',
      path: 'block',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'block',
        type: 'object',
        name: 'block',
        'x-component': 'block',
        'x-props': {
          title: 'Block1'
        },
        'x-component-props': {
          title: 'Block1'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'block.aa': {
      name: 'aa',
      path: 'block.aa',
      dataType: 'boolean',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [true],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: true,
      initialValue: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'aa',
        name: 'aa',
        type: 'boolean',
        'x-component': 'radio',
        default: true,
        enum: [
          {
            label: '是',
            value: true
          },
          {
            label: '否',
            value: false
          }
        ],
        title: '是否隐藏AA'
      },
      displayName: 'FieldState'
    },
    'block.bb': {
      name: 'bb',
      path: 'block.bb',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: false,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'bb',
        name: 'bb',
        type: 'string',
        title: 'AA'
      },
      displayName: 'FieldState'
    },
    'block.cc': {
      name: 'cc',
      path: 'block.cc',
      dataType: 'boolean',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [true],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: true,
      initialValue: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'cc',
        name: 'cc',
        type: 'boolean',
        title: '是否隐藏DD',
        default: true,
        'x-component': 'radio',
        enum: [
          {
            label: '是',
            value: true
          },
          {
            label: '否',
            value: false
          }
        ]
      },
      displayName: 'FieldState'
    },
    dd: {
      name: 'dd',
      path: 'dd',
      initialized: true,
      visible: false,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'dd',
        type: 'object',
        name: 'dd',
        'x-component': 'block',
        'x-props': {
          title: 'Block2'
        },
        'x-component-props': {
          title: 'Block2'
        }
      },
      displayName: 'VirtualFieldState'
    },
    kk: {
      name: 'kk',
      path: 'kk',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'kk',
        type: 'object',
        name: 'kk',
        'x-component': 'block',
        'x-props': {
          title: 'Block3'
        },
        'x-component-props': {
          title: 'Block3'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'kk.gg': {
      name: 'gg',
      path: 'kk.gg',
      dataType: 'string',
      initialized: true,
      pristine: false,
      valid: true,
      modified: true,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['aaaa'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: 'aaaa',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'gg',
        name: 'gg',
        type: 'string',
        title: 'GG',
        'x-props': {
          showSearch: true,
          filterLocal: false,
          style: {
            width: 200
          }
        },
        enum: [
          {
            label: 'aaaa',
            value: 'aaaa',
            extra: ['x1', 'x2', 'x3']
          },
          {
            label: 'bbbb',
            value: 'bbbb',
            extra: ['x4', 'x5', 'x6']
          },
          {
            label: 'cccc',
            value: 'cccc',
            extra: ['x7', 'x8', 'x9']
          }
        ]
      },
      displayName: 'FieldState'
    },
    'kk.hh': {
      name: 'hh',
      path: 'kk.hh',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: false,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'hh',
        name: 'hh',
        type: 'string',
        title: 'HH',
        enum: [],
        'x-props': {
          style: {
            width: 200
          }
        }
      },
      displayName: 'FieldState'
    }
  },
  {
    '': {
      pristine: true,
      valid: true,
      invalid: false,
      loading: false,
      validating: false,
      initialized: true,
      submitting: false,
      errors: [],
      warnings: [],
      values: {},
      initialValues: {},
      mounted: true,
      unmounted: false,
      props: {},
      displayName: 'FormState'
    },
    total: {
      name: 'total',
      path: 'total',
      dataType: 'number',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [
        {
          required: true
        }
      ],
      required: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'total',
        name: 'total',
        type: 'number',
        required: true,
        title: '总价'
      },
      displayName: 'FieldState'
    },
    count: {
      name: 'count',
      path: 'count',
      dataType: 'number',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [
        {
          required: true
        }
      ],
      required: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'count',
        name: 'count',
        type: 'number',
        required: true,
        title: '数量'
      },
      displayName: 'FieldState'
    },
    price: {
      name: 'price',
      path: 'price',
      dataType: 'number',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [
        {
          required: true
        }
      ],
      required: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'price',
        name: 'price',
        type: 'number',
        required: true,
        title: '单价'
      },
      displayName: 'FieldState'
    }
  },
  {
    '': {
      pristine: true,
      valid: true,
      invalid: false,
      loading: false,
      validating: false,
      initialized: true,
      submitting: false,
      errors: [],
      warnings: [],
      values: {},
      initialValues: {},
      mounted: true,
      unmounted: false,
      props: {},
      displayName: 'FormState'
    },
    NO_NAME_FIELD_$0: {
      name: 'NO_NAME_FIELD_$0',
      path: 'NO_NAME_FIELD_$0',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$0',
        type: 'object',
        name: 'NO_NAME_FIELD_$0',
        'x-component': 'block',
        'x-props': {
          title: 'Block1'
        },
        'x-component-props': {
          title: 'Block1'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa': {
      name: 'aa',
      path: 'NO_NAME_FIELD_$0.aa',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'aa',
        name: 'aa',
        type: 'string',
        enum: ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee'],
        title: 'AA'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.bb': {
      name: 'bb',
      path: 'NO_NAME_FIELD_$0.bb',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: false,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'bb',
        type: 'string',
        name: 'bb',
        title: 'BB',
        enum: []
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.cc': {
      name: 'cc',
      path: 'NO_NAME_FIELD_$0.cc',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'cc',
        type: 'string',
        name: 'cc',
        title: 'CC'
      },
      displayName: 'FieldState'
    }
  },
  {
    '': {
      pristine: true,
      valid: true,
      invalid: false,
      loading: false,
      validating: false,
      initialized: true,
      submitting: false,
      errors: [],
      warnings: [],
      values: {},
      initialValues: {},
      mounted: true,
      unmounted: false,
      props: {},
      displayName: 'FormState'
    },
    aa: {
      name: 'aa',
      path: 'aa',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [
        {
          required: true
        }
      ],
      required: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'aa',
        name: 'aa',
        type: 'string',
        required: true,
        title: 'AA'
      },
      displayName: 'FieldState'
    },
    bb: {
      name: 'bb',
      path: 'bb',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'bb',
        type: 'string',
        name: 'bb',
        title: 'BB',
        enum: ['111', '222']
      },
      displayName: 'FieldState'
    }
  },
  {
    '': {
      pristine: false,
      valid: true,
      invalid: false,
      loading: false,
      validating: false,
      initialized: true,
      submitting: false,
      errors: [],
      warnings: [],
      values: {
        aa: [
          {
            bb: 'aaaaa',
            dd: [
              {
                ff: '是',
                ee: '是'
              }
            ],
            cc: '1111'
          },
          {
            bb: 'ccccc',
            dd: [
              {
                ff: '是',
                ee: '否'
              }
            ],
            cc: '1111'
          }
        ]
      },
      initialValues: {
        aa: [
          {
            bb: 'aaaaa',
            dd: [
              {
                ee: '是',
                ff: '是'
              }
            ]
          },
          {
            bb: 'ccccc',
            dd: [
              {
                ee: '否',
                ff: '是'
              }
            ]
          }
        ]
      },
      mounted: true,
      unmounted: false,
      props: {},
      displayName: 'FormState'
    },
    NO_NAME_FIELD_$0: {
      name: 'NO_NAME_FIELD_$0',
      path: 'NO_NAME_FIELD_$0',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$0',
        type: 'object',
        name: 'NO_NAME_FIELD_$0',
        'x-component': 'block',
        'x-props': {
          title: 'Block1'
        },
        'x-component-props': {
          title: 'Block1'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa': {
      name: 'aa',
      path: 'NO_NAME_FIELD_$0.aa',
      dataType: 'array',
      initialized: true,
      pristine: false,
      valid: true,
      modified: true,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [
        [
          {
            bb: 'aaaaa',
            dd: [
              {
                ff: '是',
                ee: '是'
              }
            ],
            cc: '1111'
          },
          {
            bb: 'ccccc',
            dd: [
              {
                ff: '是',
                ee: '否'
              }
            ],
            cc: '1111'
          }
        ]
      ],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: [
        {
          bb: 'aaaaa',
          dd: [
            {
              ff: '是',
              ee: '是'
            }
          ],
          cc: '1111'
        },
        {
          bb: 'ccccc',
          dd: [
            {
              ff: '是',
              ee: '否'
            }
          ],
          cc: '1111'
        }
      ],
      initialValue: [
        {
          bb: 'aaaaa',
          dd: [
            {
              ee: '是',
              ff: '是'
            }
          ]
        },
        {
          bb: 'ccccc',
          dd: [
            {
              ee: '否',
              ff: '是'
            }
          ]
        }
      ],
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'aa',
        type: 'array',
        name: 'aa'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0': {
      name: 'aa.0',
      path: 'NO_NAME_FIELD_$0.aa.0',
      dataType: 'object',
      initialized: true,
      pristine: false,
      valid: true,
      modified: true,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [
        {
          bb: 'aaaaa',
          dd: [
            {
              ff: '是',
              ee: '是'
            }
          ],
          cc: '1111'
        }
      ],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: {
        bb: 'aaaaa',
        dd: [
          {
            ff: '是',
            ee: '是'
          }
        ],
        cc: '1111'
      },
      initialValue: {
        bb: 'aaaaa',
        dd: [
          {
            ee: '是',
            ff: '是'
          }
        ]
      },
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        type: 'object'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1': {
      name: 'aa.0.NO_NAME_FIELD_$1',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$1',
        type: 'object',
        name: 'NO_NAME_FIELD_$1',
        'x-component': 'block',
        'x-props': {
          title: '基本信息'
        },
        'x-component-props': {
          title: '基本信息'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2': {
      name: 'aa.0.NO_NAME_FIELD_$2',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$2',
        type: 'object',
        name: 'NO_NAME_FIELD_$2',
        'x-component': 'layout',
        'x-props': {
          inline: true
        },
        'x-component-props': {
          inline: true
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.bb': {
      name: 'aa.0.bb',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.bb',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['aaaaa'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: 'aaaaa',
      initialValue: 'aaaaa',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'bb',
        type: 'string',
        name: 'bb',
        enum: ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee'],
        title: 'BB'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.cc': {
      name: 'aa.0.cc',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.cc',
      dataType: 'string',
      initialized: true,
      pristine: false,
      valid: true,
      modified: true,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['1111'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: '1111',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'cc',
        type: 'string',
        name: 'cc',
        enum: ['1111', '2222'],
        title: 'CC'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.gg': {
      name: 'aa.0.gg',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.gg',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'gg',
        type: 'string',
        name: 'gg',
        title: 'GG',
        'x-props': {
          style: {
            width: 200
          }
        }
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3': {
      name: 'aa.0.NO_NAME_FIELD_$3',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$3',
        type: 'object',
        name: 'NO_NAME_FIELD_$3',
        'x-component': 'block',
        'x-props': {
          title: '嵌套Array'
        },
        'x-component-props': {
          title: '嵌套Array'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd': {
      name: 'aa.0.dd',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd',
      dataType: 'array',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [
        [
          {
            ee: '是',
            ff: '是'
          }
        ]
      ],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: [
        {
          ee: '是',
          ff: '是'
        }
      ],
      initialValue: [
        {
          ee: '是',
          ff: '是'
        }
      ],
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'dd',
        type: 'array',
        name: 'dd'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0': {
      name: 'aa.0.dd.0',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0',
      dataType: 'object',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [
        {
          ee: '是',
          ff: '是'
        }
      ],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: {
        ee: '是',
        ff: '是'
      },
      initialValue: {
        ee: '是',
        ff: '是'
      },
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        type: 'object'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4': {
      name: 'aa.0.dd.0.NO_NAME_FIELD_$4',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$4',
        type: 'object',
        name: 'NO_NAME_FIELD_$4',
        'x-component': 'layout',
        'x-props': {
          inline: true,
          style: {
            marginLeft: 20
          }
        },
        'x-component-props': {
          inline: true,
          style: {
            marginLeft: 20
          }
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ee': {
      name: 'aa.0.dd.0.ee',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ee',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['是'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: '是',
      initialValue: '是',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'ee',
        type: 'string',
        name: 'ee',
        enum: ['是', '否'],
        title: 'EE',
        description: '是否显示GG'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ff': {
      name: 'aa.0.dd.0.ff',
      path: 'NO_NAME_FIELD_$0.aa.0.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ff',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['是'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: '是',
      initialValue: '是',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'ff',
        type: 'string',
        name: 'ff',
        default: '是',
        enum: ['是', '否'],
        title: 'FF',
        description: '是否显示EE'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1': {
      name: 'aa.1',
      path: 'NO_NAME_FIELD_$0.aa.1',
      dataType: 'object',
      initialized: true,
      pristine: false,
      valid: true,
      modified: true,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [
        {
          bb: 'ccccc',
          dd: [
            {
              ff: '是',
              ee: '否'
            }
          ],
          cc: '1111'
        }
      ],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: {
        bb: 'ccccc',
        dd: [
          {
            ff: '是',
            ee: '否'
          }
        ],
        cc: '1111'
      },
      initialValue: {
        bb: 'ccccc',
        dd: [
          {
            ee: '否',
            ff: '是'
          }
        ]
      },
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        type: 'object'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1': {
      name: 'aa.1.NO_NAME_FIELD_$1',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$1',
        type: 'object',
        name: 'NO_NAME_FIELD_$1',
        'x-component': 'block',
        'x-props': {
          title: '基本信息'
        },
        'x-component-props': {
          title: '基本信息'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2': {
      name: 'aa.1.NO_NAME_FIELD_$2',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$2',
        type: 'object',
        name: 'NO_NAME_FIELD_$2',
        'x-component': 'layout',
        'x-props': {
          inline: true
        },
        'x-component-props': {
          inline: true
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.bb': {
      name: 'aa.1.bb',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.bb',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['ccccc'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: 'ccccc',
      initialValue: 'ccccc',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'bb',
        type: 'string',
        name: 'bb',
        enum: ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee'],
        title: 'BB'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.cc': {
      name: 'aa.1.cc',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.cc',
      dataType: 'string',
      initialized: true,
      pristine: false,
      valid: true,
      modified: true,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['1111'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: '1111',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'cc',
        type: 'string',
        name: 'cc',
        enum: ['1111', '2222'],
        title: 'CC'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.gg': {
      name: 'aa.1.gg',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$1.NO_NAME_FIELD_$2.gg',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: false,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [null],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'gg',
        type: 'string',
        name: 'gg',
        title: 'GG',
        'x-props': {
          style: {
            width: 200
          }
        }
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3': {
      name: 'aa.1.NO_NAME_FIELD_$3',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$3',
        type: 'object',
        name: 'NO_NAME_FIELD_$3',
        'x-component': 'block',
        'x-props': {
          title: '嵌套Array'
        },
        'x-component-props': {
          title: '嵌套Array'
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd': {
      name: 'aa.1.dd',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd',
      dataType: 'array',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [
        [
          {
            ee: '否',
            ff: '是'
          }
        ]
      ],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: [
        {
          ee: '否',
          ff: '是'
        }
      ],
      initialValue: [
        {
          ee: '否',
          ff: '是'
        }
      ],
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'dd',
        type: 'array',
        name: 'dd'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0': {
      name: 'aa.1.dd.0',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0',
      dataType: 'object',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: [
        {
          ee: '否',
          ff: '是'
        }
      ],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: {
        ee: '否',
        ff: '是'
      },
      initialValue: {
        ee: '否',
        ff: '是'
      },
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        type: 'object'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4': {
      name: 'aa.1.dd.0.NO_NAME_FIELD_$4',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4',
      initialized: true,
      visible: true,
      display: true,
      mounted: true,
      unmounted: false,
      props: {
        key: 'NO_NAME_FIELD_$4',
        type: 'object',
        name: 'NO_NAME_FIELD_$4',
        'x-component': 'layout',
        'x-props': {
          inline: true,
          style: {
            marginLeft: 20
          }
        },
        'x-component-props': {
          inline: true,
          style: {
            marginLeft: 20
          }
        }
      },
      displayName: 'VirtualFieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ee': {
      name: 'aa.1.dd.0.ee',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ee',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['否'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: '否',
      initialValue: '否',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'ee',
        type: 'string',
        name: 'ee',
        enum: ['是', '否'],
        title: 'EE',
        description: '是否显示GG'
      },
      displayName: 'FieldState'
    },
    'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ff': {
      name: 'aa.1.dd.0.ff',
      path: 'NO_NAME_FIELD_$0.aa.1.NO_NAME_FIELD_$3.dd.0.NO_NAME_FIELD_$4.ff',
      dataType: 'string',
      initialized: true,
      pristine: true,
      valid: true,
      modified: false,
      touched: false,
      active: false,
      visited: false,
      invalid: false,
      visible: true,
      display: true,
      loading: false,
      validating: false,
      errors: [],
      values: ['是'],
      ruleErrors: [],
      ruleWarnings: [],
      effectErrors: [],
      warnings: [],
      effectWarnings: [],
      editable: true,
      value: '是',
      initialValue: '是',
      rules: [],
      required: false,
      mounted: true,
      unmounted: false,
      props: {
        key: 'ff',
        type: 'string',
        name: 'ff',
        default: '是',
        enum: ['是', '否'],
        title: 'FF',
        description: '是否显示EE'
      },
      displayName: 'FieldState'
    }
  }
]

ReactDOM.render(
  <App dataSource={dataSource} />,
  document.getElementById('root')
)
