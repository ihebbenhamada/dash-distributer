class imp_Hotel{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){
        $(document).ready(function() {

            // CALL SSAPI  DEVICE GET LIST
            // event success ListDevicesReceive
            var event = new CustomEvent("ListHotelsReceive", {
                detail: {
                    list: [
                        {
                            "id": 36,
                            "chain_id": 9,
                            "name": "Mouradi",
                            "stars": 3,
                            "tripadvisor_url": null,
                            "logo": "https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                            "cover": "https://apitndati.com/v003/public/uploads/tourist_images/FLFjtuUZPOLoyNFpbtiiMVQlREOjDwAO3dNiiys5.webp",
                            "Location": [
                                {
                                    "id": 25,
                                    "city": "tttt",
                                    "state": "zzz",
                                    "adress": "aaaa",
                                    "aptitude": null,
                                    "longitude": null,
                                    "zoom": null,
                                    "mapData": null,
                                    "Country": {
                                        "id": 15,
                                        "name": "Algeria",
                                        "code2": "DZ",
                                        "code3": "DZA",
                                        "latitude": "28",
                                        "longitude": "3",
                                        "Translate": [
                                            {
                                                "languageName": "FRENCH",
                                                "maternalName": "FRANﾇAIS",
                                                "code": "FR",
                                                "content": "Alg駻ie"
                                            },
                                            {
                                                "languageName": "ARABIC",
                                                "maternalName": "???????",
                                                "code": "AR",
                                                "content": "???????"
                                            }
                                        ]
                                    },
                                    "Continent": {
                                        "id": 2,
                                        "name": "Europe",
                                        "latitude": "47.0316077",
                                        "longitude": "9.4161029",
                                        "zoom": "4.75z"
                                    }
                                }
                            ],
                            "Contact": [
                                {
                                    "id": 13,
                                    "hotel_id": 36,
                                    "contact_type_id": 3,
                                    "libelle": "bh@gmail.com"
                                },
                                {
                                    "id": 14,
                                    "hotel_id": 36,
                                    "contact_type_id": 1,
                                    "libelle": "71555623"
                                }
                            ],
                            "Chain": [
                                {
                                    "id": 9,
                                    "name": "aaaa",
                                    "logo": "bbbb"
                                }
                            ],
                            "Languages": [
                                {
                                    "id": 1,
                                    "languageName": "english",
                                    "maternalName": "english",
                                    "code": "En",
                                    "isPrimary": 1,
                                    "isActive": 1
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "chain_id": 9,
                            "name": "Mouradi Hammamet",
                            "stars": 5,
                            "tripadvisor_url": null,
                            "logo": "https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                            "cover": "https://apitndati.com/v003/public/uploads/tourist_images/FLFjtuUZPOLoyNFpbtiiMVQlREOjDwAO3dNiiys5.webp",
                            "Location": [
                                {
                                    "id": 25,
                                    "city": "tttt",
                                    "state": "zzz",
                                    "adress": "aaaa",
                                    "aptitude": null,
                                    "longitude": null,
                                    "zoom": null,
                                    "mapData": null,
                                    "Country": {
                                        "id": 15,
                                        "name": "Algeria",
                                        "code2": "DZ",
                                        "code3": "DZA",
                                        "latitude": "28",
                                        "longitude": "3",
                                        "Translate": [
                                            {
                                                "languageName": "FRENCH",
                                                "maternalName": "FRANﾇAIS",
                                                "code": "FR",
                                                "content": "Alg駻ie"
                                            },
                                            {
                                                "languageName": "ARABIC",
                                                "maternalName": "???????",
                                                "code": "AR",
                                                "content": "???????"
                                            }
                                        ]
                                    },
                                    "Continent": {
                                        "id": 2,
                                        "name": "Europe",
                                        "latitude": "47.0316077",
                                        "longitude": "9.4161029",
                                        "zoom": "4.75z"
                                    }
                                }
                            ],
                            "Contact": [
                                {
                                    "id": 13,
                                    "hotel_id": 36,
                                    "contact_type_id": 3,
                                    "libelle": "bh@gmail.com"
                                },
                                {
                                    "id": 14,
                                    "hotel_id": 36,
                                    "contact_type_id": 1,
                                    "libelle": "71555623"
                                }
                            ],
                            "Chain": [
                                {
                                    "id": 9,
                                    "name": "aaaa",
                                    "logo": "bbbb"
                                }
                            ],
                            "Languages": [
                                {
                                    "id": 1,
                                    "languageName": "english",
                                    "maternalName": "english",
                                    "code": "En",
                                    "isPrimary": 1,
                                    "isActive": 1
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "chain_id": 9,
                            "name": "Business Hotel Tunisie",
                            "stars": 4,
                            "tripadvisor_url": null,
                            "logo": "https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                            "cover": "https://apitndati.com/v003/public/uploads/tourist_images/FLFjtuUZPOLoyNFpbtiiMVQlREOjDwAO3dNiiys5.webp",
                            "Location": [
                                {
                                    "id": 25,
                                    "city": "tttt",
                                    "state": "zzz",
                                    "adress": "aaaa",
                                    "aptitude": null,
                                    "longitude": null,
                                    "zoom": null,
                                    "mapData": null,
                                    "Country": {
                                        "id": 15,
                                        "name": "Algeria",
                                        "code2": "DZ",
                                        "code3": "DZA",
                                        "latitude": "28",
                                        "longitude": "3",
                                        "Translate": [
                                            {
                                                "languageName": "FRENCH",
                                                "maternalName": "FRANﾇAIS",
                                                "code": "FR",
                                                "content": "Alg駻ie"
                                            },
                                            {
                                                "languageName": "ARABIC",
                                                "maternalName": "???????",
                                                "code": "AR",
                                                "content": "???????"
                                            }
                                        ]
                                    },
                                    "Continent": {
                                        "id": 2,
                                        "name": "Europe",
                                        "latitude": "47.0316077",
                                        "longitude": "9.4161029",
                                        "zoom": "4.75z"
                                    }
                                }
                            ],
                            "Contact": [
                                {
                                    "id": 13,
                                    "hotel_id": 36,
                                    "contact_type_id": 3,
                                    "libelle": "bh@gmail.com"
                                },
                                {
                                    "id": 14,
                                    "hotel_id": 36,
                                    "contact_type_id": 1,
                                    "libelle": "71555623"
                                }
                            ],
                            "Chain": [
                                {
                                    "id": 9,
                                    "name": "aaaa",
                                    "logo": "bbbb"
                                }
                            ],
                            "Languages": [
                                {
                                    "id": 1,
                                    "languageName": "english",
                                    "maternalName": "english",
                                    "code": "En",
                                    "isPrimary": 1,
                                    "isActive": 1
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "chain_id": 9,
                            "name": "Mouradi fdsddddddddddddddddddddddddddddddddddddddddddddddds gvdfgdfgdfgdf",
                            "stars": 4,
                            "tripadvisor_url": null,
                            "logo": "https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                            "cover": "https://apitndati.com/v003/public/uploads/tourist_images/FLFjtuUZPOLoyNFpbtiiMVQlREOjDwAO3dNiiys5.webp",
                            "Location": [
                                {
                                    "id": 25,
                                    "city": "tttt",
                                    "state": "zzz",
                                    "adress": "aaaa",
                                    "aptitude": null,
                                    "longitude": null,
                                    "zoom": null,
                                    "mapData": null,
                                    "Country": {
                                        "id": 15,
                                        "name": "Algeria",
                                        "code2": "DZ",
                                        "code3": "DZA",
                                        "latitude": "28",
                                        "longitude": "3",
                                        "Translate": [
                                            {
                                                "languageName": "FRENCH",
                                                "maternalName": "FRANﾇAIS",
                                                "code": "FR",
                                                "content": "Alg駻ie"
                                            },
                                            {
                                                "languageName": "ARABIC",
                                                "maternalName": "???????",
                                                "code": "AR",
                                                "content": "???????"
                                            }
                                        ]
                                    },
                                    "Continent": {
                                        "id": 2,
                                        "name": "Europe",
                                        "latitude": "47.0316077",
                                        "longitude": "9.4161029",
                                        "zoom": "4.75z"
                                    }
                                }
                            ],
                            "Contact": [
                                {
                                    "id": 13,
                                    "hotel_id": 36,
                                    "contact_type_id": 3,
                                    "libelle": "bh@gmail.com"
                                },
                                {
                                    "id": 14,
                                    "hotel_id": 36,
                                    "contact_type_id": 1,
                                    "libelle": "71555623"
                                }
                            ],
                            "Chain": [
                                {
                                    "id": 9,
                                    "name": "aaaa",
                                    "logo": "bbbb"
                                }
                            ],
                            "Languages": [
                                {
                                    "id": 1,
                                    "languageName": "english",
                                    "maternalName": "english",
                                    "code": "En",
                                    "isPrimary": 1,
                                    "isActive": 1
                                }
                            ]
                        }
                        ]
                }
            });


            document.dispatchEvent(event);

        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListHotelsReceive", function(e){
            hotelList_ui.DATALIST(e.detail);
        }, false);
    }
}

let iHotel = new imp_Hotel();