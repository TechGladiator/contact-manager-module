/*
 * File: app/view/contacts/ListPanelNarrow.js
 *
 * This file was generated by Sencha Architect version 4.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ContactManagerModule.view.contacts.ListPanelNarrow', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contacts.listpanelnarrow',

    requires: [
        'ContactManagerModule.view.contacts.ListPanelViewModel1',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Check'
    ],

    viewModel: {
        type: 'contacts.listpanelnarrow'
    },
    width: 1310,

    items: [
        {
            xtype: 'button',
            margin: 10,
            width: 125,
            text: 'All Contacts',
            menu: {
                xtype: 'menu',
                width: 120,
                items: [
                    {
                        xtype: 'menuitem',
                        text: 'Menu Item'
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Menu Item'
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Menu Item'
                    }
                ]
            }
        },
        {
            xtype: 'button',
            margin: '10 0 0 220',
            width: 125,
            text: 'Add Contact'
        },
        {
            xtype: 'gridpanel',
            frame: true,
            store: 'contacts.Store',
            columns: [
                {
                    xtype: 'checkcolumn',
                    width: 41,
                    sortable: false,
                    hideable: false,
                    menuDisabled: true,
                    headerCheckbox: true
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'title',
                    menuDisabled: true,
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    width: 229,
                    dataIndex: 'first_name',
                    menuDisabled: true,
                    text: 'First Name'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'middle_name',
                    menuDisabled: true,
                    text: 'Middle Name'
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    width: 229,
                    dataIndex: 'last_name',
                    menuDisabled: true,
                    text: 'Last Name'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'suffix',
                    menuDisabled: true,
                    text: 'Suffix'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'gender',
                    menuDisabled: true,
                    text: 'Gender'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'home_phone',
                    menuDisabled: true,
                    text: 'Home Phone'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'mobile_phone',
                    menuDisabled: true,
                    text: 'Mobile Phone'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'personal_email',
                    menuDisabled: true,
                    text: 'Personal Email'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'home_street',
                    menuDisabled: true,
                    text: 'Home Street'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'home_city',
                    menuDisabled: true,
                    text: 'Home City'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'home_state',
                    menuDisabled: true,
                    text: 'Home State'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'home_postal_code',
                    menuDisabled: true,
                    text: 'Home Postal Code'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'home_country',
                    menuDisabled: true,
                    text: 'Home Country'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_name',
                    menuDisabled: true,
                    text: 'Company Name'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_email',
                    menuDisabled: true,
                    text: 'Company Email'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_phone',
                    menuDisabled: true,
                    text: 'Company Phone'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_street',
                    menuDisabled: true,
                    text: 'Company Street'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_city',
                    menuDisabled: true,
                    text: 'Company City'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_state',
                    menuDisabled: true,
                    text: 'Company State'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_postal_code',
                    menuDisabled: true,
                    text: 'Company Postal Code'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 229,
                    dataIndex: 'company_country',
                    menuDisabled: true,
                    text: 'Company Country'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 120,
                    sortable: false,
                    text: 'Add Columns +'
                }
            ]
        },
        {
            xtype: 'panel',
            items: [
                {
                    xtype: 'button',
                    margin: 10,
                    width: 125,
                    text: '10 per page',
                    menu: {
                        xtype: 'menu',
                        width: 120,
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Menu Item'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Menu Item'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Menu Item'
                            }
                        ]
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'panel',
                    dock: 'right',
                    html: '<b style="opacity: 0.3;"><<</b> <b>1 - 8</b> <b style="opacity: 0.3;">>></b>',
                    margin: 10,
                    padding: '8 0 0 60',
                    width: 125
                }
            ]
        }
    ]

});