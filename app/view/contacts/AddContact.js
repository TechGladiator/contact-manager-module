/*
 * File: app/view/contacts/AddContact.js
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

Ext.define('ContactManagerModule.view.contacts.AddContact', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contacts.addcontact',

    requires: [
        'ContactManagerModule.view.contacts.AddContactViewModel',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Split'
    ],

    viewModel: {
        type: 'contacts.addcontact'
    },
    frame: true,
    width: 400,
    title: 'Add New Contact',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'tabpanel',
            margin: '10 0 0',
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    bodyPadding: 10,
                    title: 'Personal',
                    items: [
                        {
                            xtype: 'form',
                            margin: '10 0 0',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'First Name'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Last Name*'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Title'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Company Name'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    bodyPadding: 10,
                    title: 'Contact Info',
                    items: [
                        {
                            xtype: 'form',
                            margin: '10 0 0',
                            items: [
                                {
                                    xtype: 'panel',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'splitbutton',
                                            margin: '0 0 10',
                                            text: 'Company Email'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 15',
                                            width: 220
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'splitbutton',
                                            margin: '0 0 10',
                                            text: 'Personal Email'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 15',
                                            width: 225
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'splitbutton',
                                            margin: '0 0 10',
                                            text: 'Home Email'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 15',
                                            width: 240
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    html: '<div><button style="border-width: 0;border-radius: 50%;background-color: #5fa2dd;">+</button> Add Email</div>',
                                    margin: '0 0 10'
                                },
                                {
                                    xtype: 'panel',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'splitbutton',
                                            margin: '0 0 10',
                                            text: 'Company Phone'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 15',
                                            width: 215
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'splitbutton',
                                            margin: '0 0 10',
                                            text: 'Desk Phone'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 15',
                                            width: 241
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'splitbutton',
                                            margin: '0 0 10',
                                            text: 'Mobile Phone'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 15',
                                            width: 230
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'splitbutton',
                                            margin: '0 0 10',
                                            text: 'Home Phone'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 15',
                                            width: 234
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    html: '<div><button style="border-width: 0;border-radius: 50%;background-color: #5fa2dd;">+</button> Add Phone</div>',
                                    margin: '0 0 10'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    bodyPadding: 10,
                    title: 'Address',
                    items: [
                        {
                            xtype: 'form',
                            margin: '10 0 0',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Street Address'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'City'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'State'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Zip Code'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Country'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'panel',
            flex: 1,
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'button',
                    flex: 1,
                    margin: 10,
                    text: 'Save'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    margin: 10,
                    text: 'cancel'
                }
            ]
        }
    ]

});