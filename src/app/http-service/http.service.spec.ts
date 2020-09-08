import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('Http', () => {
  let injector: TestBed;
  let service: HttpService;
  let httpMock: HttpTestingController;

  const redditListingMockData = {
    "kind": "Listing",
    "data": {
      "modhash": "",
      "dist": 27,
      "children": [
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "Efter en (lite för) lång väntan kommer nu vinnarna av våran eminenta tårtabakartävling!\n\nNi röstade på era favoriter i 3 kategorier, och resultaten var tydliga. Vinnarna är...\n\n---\n#Bästa Smörgåstårta: \n\nDen mycket vackra [Oklassiska smörgåstårtan](https://imgur.com/a/j1YG6ly), postad av u/Qured!\n\n---\n#Bästa efterrättstårta:\n\nDen något kontroversiella, men ack så klassiska [Småländska ostkakan] (https://imgur.com/gallery/lsTvwiZ), bakad av u/neoshero!\n\n---\n#Bästa fantasifulla tårta:\n\nDen totalt galna [Kladdsugaren](https://imgur.com/a/4CQQJYp), bakad av u/tydh!\n\n---\n\nDessa tre fantastiska tårtbagare kommer att få varsit **presentkort på 300 kronor**, och vi kommer att PM:a dem för vidare information.\n\n#Grattis alla vinnare, och stort tack till alla som deltog!",
            "author_fullname": "t2_e5fl2",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Hela Sweddit Bakar - Vinnarna!",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": null,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_inocdi",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.94,
            "author_flair_background_color": "",
            "subreddit_type": "public",
            "ups": 100,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": null,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 100,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "self",
            "edited": 1599409063,
            "author_flair_css_class": null,
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "🦄"
              }
            ],
            "gildings": {},
            "post_hint": "self",
            "content_categories": null,
            "is_self": true,
            "mod_note": null,
            "created": 1599436387,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "self.sweden",
            "allow_live_comments": false,
            "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Efter en (lite för) lång väntan kommer nu vinnarna av våran eminenta tårtabakartävling!&lt;/p&gt;\n\n&lt;p&gt;Ni röstade på era favoriter i 3 kategorier, och resultaten var tydliga. Vinnarna är...&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;h1&gt;Bästa Smörgåstårta:&lt;/h1&gt;\n\n&lt;p&gt;Den mycket vackra &lt;a href=\"https://imgur.com/a/j1YG6ly\"&gt;Oklassiska smörgåstårtan&lt;/a&gt;, postad av &lt;a href=\"/u/Qured\"&gt;u/Qured&lt;/a&gt;!&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;h1&gt;Bästa efterrättstårta:&lt;/h1&gt;\n\n&lt;p&gt;Den något kontroversiella, men ack så klassiska &lt;a href=\"https://imgur.com/gallery/lsTvwiZ\"&gt;Småländska ostkakan&lt;/a&gt;, bakad av &lt;a href=\"/u/neoshero\"&gt;u/neoshero&lt;/a&gt;!&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;h1&gt;Bästa fantasifulla tårta:&lt;/h1&gt;\n\n&lt;p&gt;Den totalt galna &lt;a href=\"https://imgur.com/a/4CQQJYp\"&gt;Kladdsugaren&lt;/a&gt;, bakad av &lt;a href=\"/u/tydh\"&gt;u/tydh&lt;/a&gt;!&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;Dessa tre fantastiska tårtbagare kommer att få varsit &lt;strong&gt;presentkort på 300 kronor&lt;/strong&gt;, och vi kommer att PM:a dem för vidare information.&lt;/p&gt;\n\n&lt;h1&gt;Grattis alla vinnare, och stort tack till alla som deltog!&lt;/h1&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/E2mC92mqzRUBuvbVYWS9rRoWAjdLB5ke8NsuqQH28xo.jpg?auto=webp&amp;s=ba801a968c6fcc3b45eec430f7c8971fe5472192",
                    "width": 3000,
                    "height": 4000
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/E2mC92mqzRUBuvbVYWS9rRoWAjdLB5ke8NsuqQH28xo.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=358a8ed7f495e0e9d4db95d4cc578fd293708680",
                      "width": 108,
                      "height": 144
                    },
                    {
                      "url": "https://external-preview.redd.it/E2mC92mqzRUBuvbVYWS9rRoWAjdLB5ke8NsuqQH28xo.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=41336605d9f7dedd8b47e696d6d8e342b48bc5ab",
                      "width": 216,
                      "height": 288
                    },
                    {
                      "url": "https://external-preview.redd.it/E2mC92mqzRUBuvbVYWS9rRoWAjdLB5ke8NsuqQH28xo.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=14038e675f43f964becb22594e162bc9b2dab231",
                      "width": 320,
                      "height": 426
                    },
                    {
                      "url": "https://external-preview.redd.it/E2mC92mqzRUBuvbVYWS9rRoWAjdLB5ke8NsuqQH28xo.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=8e164933a9d0c6c1d41d1de4cc39c5fe2e3025fb",
                      "width": 640,
                      "height": 853
                    },
                    {
                      "url": "https://external-preview.redd.it/E2mC92mqzRUBuvbVYWS9rRoWAjdLB5ke8NsuqQH28xo.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=99424dcd8ca75ae236bbea5cd4156e43ec779e11",
                      "width": 960,
                      "height": 1280
                    },
                    {
                      "url": "https://external-preview.redd.it/E2mC92mqzRUBuvbVYWS9rRoWAjdLB5ke8NsuqQH28xo.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=e1090be85fe507a0cf263bbe7c68d27e96f79ac4",
                      "width": 1080,
                      "height": 1440
                    }
                  ],
                  "variants": {},
                  "id": "wVyTbpVGT2qy7fw_YxMdtR42uhcQ8l_pEMh6D6U4-Aw"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "🦄",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "inocdi",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "kerpoople",
            "discussion_type": null,
            "num_comments": 14,
            "send_replies": false,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/inocdi/hela_sweddit_bakar_vinnarna/",
            "parent_whitelist_status": "all_ads",
            "stickied": true,
            "url": "https://www.reddit.com/r/sweden/comments/inocdi/hela_sweddit_bakar_vinnarna/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599407587,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "Då det just nu kommer enorma mängder information runt coronaviruset och dess spridning har vi valt att införa karantän här på Sweddit och låser in all information runt ämnet i en megatråd. Vänligen håll en någorlunda seriös nivå.\n\n[Se här för våra riktlinjer för moderering av corona-inlägg.](https://www.reddit.com/r/sweden/comments/fi4duv/riktlinjer_f%C3%B6r_modereing_kring_corona/)\n\n**Alla med symtom på luftvägsinfektion, även lindriga, uppmanas nu att avstå sociala kontakter som riskerar att sprida smitta.**\n\n---\n\nHjälp till att bekämpa coronaviruset med [Folding@Home](https://www.reddit.com/r/sweden/comments/fjsywi/hj%C3%A4lp_till_att_bek%C3%A4mpa_coronaviruset_med/)\n\n\n**Officiell information:**\n\n* [113 13 informationsnummer](https://www.sosalarm.se/viktiga-telefonnummer/11313/)\n\n* [1177 Vårdguiden (endast vid allvarliga symptom)](https://www.1177.se/aktuellt/nytt-coronavirus-covid-19/)\n\n* [Folkhälsomyndigheten](https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/fragor-och-svar/) ([in English](https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/covid-19/))\n\n* [Statistik från Folkhälsomyndigheten](https://experience.arcgis.com/experience/09f821667ce64bf7be6f9f87457ed9aa)\n\n* [krisinformation.se](https://www.krisinformation.se/)\n\n* [ECDC (engelska)](https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases)\n\n* [WHO (engelska)](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports)\n\n* [SLL - Coronavirus/covid19 - Behöver jag ringa vården? Självtest](https://corona.sll.se/)\n\n**Ytterligare information:**\n\n* [Karta över spridning i Sverige](https://www.coronakartan.se/)\n\n* [Experter håller en AMA (engelska)](https://www.reddit.com/r/Coronavirus/comments/fdf5fq/we_are_a_team_of_medical_experts_following/)\n\n* [Virusnytt](https://virusnytt.se/) - Samlingsplats med nyhetsartiklar rörande utbrottet\n\n* [c19.se](https://c19.se/) - Nyheter och statistik runt utbrottet\n\n* [Statistik på fallen i Sverige](https://platz.se/coronavirus/)\n\n* [covid19insweden.com](https://www.covid19insweden.com/) - Statistik och grafer över fall i Sverige och andra länder\n\n* [Logg på händelseförlopp på Wikipedia (engelska)](https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Sweden#Responses)\n\n\nGlöm inte att tvätta händerna!\n\n//Mod-teamet\n\n---\n\n[Tidigare megatrådar](https://www.reddit.com/r/sweden/search/?q=+Megatr%C3%A5d+-+Coronavirus&amp;sort=new&amp;restrict_sr=on&amp;t=all)\n\n**Försök att inkludera länkar när ni diskuterar nyheter!**",
            "author_fullname": "t2_5m912",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Veckotråd - Coronavirus [2020-09-07 - 10]",
            "link_flair_richtext": [
              {
                "e": "text",
                "t": "Megatråd"
              }
            ],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": "text",
            "downs": 0,
            "thumbnail_height": null,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_io29nn",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.69,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 10,
            "total_awards_received": 1,
            "media_embed": {},
            "thumbnail_width": null,
            "author_flair_template_id": "06abd54e-3895-11e2-ada4-12313d051e91",
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": "Megatråd",
            "can_mod_post": false,
            "score": 10,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "self",
            "edited": false,
            "author_flair_css_class": "flag landskap-jamtland",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Swishade 300kr och allt jag fick var denna flair"
              }
            ],
            "gildings": {},
            "post_hint": "self",
            "content_categories": null,
            "is_self": true,
            "mod_note": null,
            "created": 1599488185,
            "link_flair_type": "richtext",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "self.sweden",
            "allow_live_comments": true,
            "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Då det just nu kommer enorma mängder information runt coronaviruset och dess spridning har vi valt att införa karantän här på Sweddit och låser in all information runt ämnet i en megatråd. Vänligen håll en någorlunda seriös nivå.&lt;/p&gt;\n\n&lt;p&gt;&lt;a href=\"https://www.reddit.com/r/sweden/comments/fi4duv/riktlinjer_f%C3%B6r_modereing_kring_corona/\"&gt;Se här för våra riktlinjer för moderering av corona-inlägg.&lt;/a&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Alla med symtom på luftvägsinfektion, även lindriga, uppmanas nu att avstå sociala kontakter som riskerar att sprida smitta.&lt;/strong&gt;&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;Hjälp till att bekämpa coronaviruset med &lt;a href=\"https://www.reddit.com/r/sweden/comments/fjsywi/hj%C3%A4lp_till_att_bek%C3%A4mpa_coronaviruset_med/\"&gt;Folding@Home&lt;/a&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Officiell information:&lt;/strong&gt;&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.sosalarm.se/viktiga-telefonnummer/11313/\"&gt;113 13 informationsnummer&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.1177.se/aktuellt/nytt-coronavirus-covid-19/\"&gt;1177 Vårdguiden (endast vid allvarliga symptom)&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/fragor-och-svar/\"&gt;Folkhälsomyndigheten&lt;/a&gt; (&lt;a href=\"https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/covid-19/\"&gt;in English&lt;/a&gt;)&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://experience.arcgis.com/experience/09f821667ce64bf7be6f9f87457ed9aa\"&gt;Statistik från Folkhälsomyndigheten&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.krisinformation.se/\"&gt;krisinformation.se&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases\"&gt;ECDC (engelska)&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports\"&gt;WHO (engelska)&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://corona.sll.se/\"&gt;SLL - Coronavirus/covid19 - Behöver jag ringa vården? Självtest&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;p&gt;&lt;strong&gt;Ytterligare information:&lt;/strong&gt;&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.coronakartan.se/\"&gt;Karta över spridning i Sverige&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.reddit.com/r/Coronavirus/comments/fdf5fq/we_are_a_team_of_medical_experts_following/\"&gt;Experter håller en AMA (engelska)&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://virusnytt.se/\"&gt;Virusnytt&lt;/a&gt; - Samlingsplats med nyhetsartiklar rörande utbrottet&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://c19.se/\"&gt;c19.se&lt;/a&gt; - Nyheter och statistik runt utbrottet&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://platz.se/coronavirus/\"&gt;Statistik på fallen i Sverige&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.covid19insweden.com/\"&gt;covid19insweden.com&lt;/a&gt; - Statistik och grafer över fall i Sverige och andra länder&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Sweden#Responses\"&gt;Logg på händelseförlopp på Wikipedia (engelska)&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;p&gt;Glöm inte att tvätta händerna!&lt;/p&gt;\n\n&lt;p&gt;//Mod-teamet&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;&lt;a href=\"https://www.reddit.com/r/sweden/search/?q=+Megatr%C3%A5d+-+Coronavirus&amp;amp;sort=new&amp;amp;restrict_sr=on&amp;amp;t=all\"&gt;Tidigare megatrådar&lt;/a&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Försök att inkludera länkar när ni diskuterar nyheter!&lt;/strong&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
            "likes": null,
            "suggested_sort": "new",
            "banned_at_utc": null,
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/md8UwS9Tb3J3y_oD5Re8s3CKxuqM5xUaMPKdOjJr8qg.jpg?auto=webp&amp;s=3e6a53a780167fe64640f5448d8cc448c8f158ad",
                    "width": 600,
                    "height": 400
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/md8UwS9Tb3J3y_oD5Re8s3CKxuqM5xUaMPKdOjJr8qg.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=969d953c0f03a06c583fe79e2a98b7baed42833d",
                      "width": 108,
                      "height": 72
                    },
                    {
                      "url": "https://external-preview.redd.it/md8UwS9Tb3J3y_oD5Re8s3CKxuqM5xUaMPKdOjJr8qg.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=90e9ad5bafadb22819eebf65e420025b423bf6dc",
                      "width": 216,
                      "height": 144
                    },
                    {
                      "url": "https://external-preview.redd.it/md8UwS9Tb3J3y_oD5Re8s3CKxuqM5xUaMPKdOjJr8qg.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=8acb5b261ae338d7b030c7d6e9b22384a6567550",
                      "width": 320,
                      "height": 213
                    }
                  ],
                  "variants": {},
                  "id": "9_vSENPKqtxSYF8QnecNWEoMSJSl1b86WqwFKqtAYaI"
                }
              ],
              "enabled": false
            },
            "all_awardings": [
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 50,
                "resized_tier_icons": null,
                "id": "award_02d9ab2c-162e-4c01-8438-317a016ed3d9",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "I'm in this with you.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Take My Energy",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png"
              }
            ],
            "awarders": [],
            "media_only": false,
            "link_flair_template_id": "49e16170-989e-11e3-ae6c-12313d1658c8",
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Swishade 300kr och allt jag fick var denna flair",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "io29nn",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "spiritualized",
            "discussion_type": null,
            "num_comments": 117,
            "send_replies": false,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/io29nn/veckotråd_coronavirus_20200907_10/",
            "parent_whitelist_status": "all_ads",
            "stickied": true,
            "url": "https://www.reddit.com/r/sweden/comments/io29nn/veckotråd_coronavirus_20200907_10/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599459385,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_32jbmhej",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Se till att hitta den här skylten nästa gång ni är I Ystad",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iordlu",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.98,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 881,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 881,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/NokaX74lJ2fsfhJ1cAStL5O93s7BIAnNyGNLbI3mYuk.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599590814,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.redd.it",
            "allow_live_comments": true,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/ahazem5llwl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/ahazem5llwl51.jpg?auto=webp&amp;s=d297251bb073011b6858b0149ad0e033ccfa0729",
                    "width": 3120,
                    "height": 4160
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/ahazem5llwl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=90a93cb7d465cb6b1442d708220ba1357bddd277",
                      "width": 108,
                      "height": 144
                    },
                    {
                      "url": "https://preview.redd.it/ahazem5llwl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=004bdfc477da9dfbd71d31270aaadd5289939c16",
                      "width": 216,
                      "height": 288
                    },
                    {
                      "url": "https://preview.redd.it/ahazem5llwl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=686ba6514dfee8566aea1bfefd3926859f3e7b72",
                      "width": 320,
                      "height": 426
                    },
                    {
                      "url": "https://preview.redd.it/ahazem5llwl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=a14722a9bdd41a882bdf664c611c99288a80eb36",
                      "width": 640,
                      "height": 853
                    },
                    {
                      "url": "https://preview.redd.it/ahazem5llwl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=602088d81daf278a68f925d7d922a00fa7863c4e",
                      "width": 960,
                      "height": 1280
                    },
                    {
                      "url": "https://preview.redd.it/ahazem5llwl51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=82a8eb353f64e667382a343dba7a1038cc837561",
                      "width": 1080,
                      "height": 1440
                    }
                  ],
                  "variants": {},
                  "id": "WRuiAgmGpEKq6gQOwx4o4cJVg-R_kWGsp0Vx4sJfGvE"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iordlu",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Jimmy-Retard",
            "discussion_type": null,
            "num_comments": 31,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iordlu/se_till_att_hitta_den_här_skylten_nästa_gång_ni/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/ahazem5llwl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599562014,
            "num_crossposts": 1,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_8ogsl",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 4,
            "clicked": false,
            "title": "LoFi Swiphop - OC",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 78,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_ioa61d",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.97,
            "author_flair_background_color": "",
            "subreddit_type": "public",
            "ups": 5267,
            "total_awards_received": 32,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 5267,
            "approved_by": null,
            "author_premium": true,
            "thumbnail": "https://b.thumbs.redditmedia.com/BgsaQse2ltxJdlQ2lgRvBRSHJ_s8X9utjMJtNL_k_TM.jpg",
            "edited": false,
            "author_flair_css_class": "flag landskap-skane",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Skåne"
              }
            ],
            "gildings": {
              "gid_1": 3,
              "gid_2": 4,
              "gid_3": 1
            },
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599523478,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "i.redd.it",
            "allow_live_comments": true,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/uvf90xb71rl51.png",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/uvf90xb71rl51.png?auto=webp&amp;s=b9ad3399382d8ae562453b9d1607779c7a3fb5f5",
                    "width": 4800,
                    "height": 2700
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/uvf90xb71rl51.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=a012dae12ebd3da511708e12b7486dac2ac42676",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://preview.redd.it/uvf90xb71rl51.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=e51e5d38d878c1dacc218a49769f2f2bef7a2de6",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://preview.redd.it/uvf90xb71rl51.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=833d44deb66bf55c8b06b24eb86666a3dffb7691",
                      "width": 320,
                      "height": 180
                    },
                    {
                      "url": "https://preview.redd.it/uvf90xb71rl51.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=2f6f7fc11323167f410c8d462e372e7bcad997b7",
                      "width": 640,
                      "height": 360
                    },
                    {
                      "url": "https://preview.redd.it/uvf90xb71rl51.png?width=960&amp;crop=smart&amp;auto=webp&amp;s=038a1c310f7c0b7d1d55952802fd1f3e02309c66",
                      "width": 960,
                      "height": 540
                    },
                    {
                      "url": "https://preview.redd.it/uvf90xb71rl51.png?width=1080&amp;crop=smart&amp;auto=webp&amp;s=376b6cd2b525b20a861f91603ad26a51b9460763",
                      "width": 1080,
                      "height": 607
                    }
                  ],
                  "variants": {},
                  "id": "2bAv0j5EpDoZwEzzmupqdjtl1hpIR9ooh4823-fNeys"
                }
              ],
              "enabled": true
            },
            "all_awardings": [
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 31,
                "coin_price": 1800,
                "resized_tier_icons": null,
                "id": "gid_3",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://www.redditstatic.com/gold/awards/icon/platinum_512.png",
                "days_of_premium": 31,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_16.png",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_32.png",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_48.png",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_64.png",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_128.png",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 512,
                "static_icon_width": 512,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Gives the author a month of Reddit Premium, which includes %{coin_symbol}700 Coins for that month, and shows a Platinum Award.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 512,
                "name": "Platinum",
                "resized_static_icons": [
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_16.png",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_32.png",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_48.png",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_64.png",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/platinum_128.png",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 512,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/platinum_512.png"
              },
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 500,
                "resized_tier_icons": null,
                "id": "gid_2",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 100,
                "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
                "days_of_premium": 7,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 512,
                "static_icon_width": 512,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Gives the author a week of Reddit Premium, %{coin_symbol}100 Coins to do with as they please, and shows a Gold Award.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 4,
                "static_icon_height": 512,
                "name": "Gold",
                "resized_static_icons": [
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 512,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png"
              },
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 200,
                "resized_tier_icons": null,
                "id": "award_d125d124-5c03-490d-af3d-d07c462003da",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=16&amp;height=16&amp;auto=webp&amp;s=3bdbd7660aa0164072a243b6df9100da769e8278",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=32&amp;height=32&amp;auto=webp&amp;s=30aa8ad7b30c73defb1b1b49dc055f42c8c39fcc",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=48&amp;height=48&amp;auto=webp&amp;s=a5109b271dbe4f27927ee8bac7f23d1962a44936",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=64&amp;height=64&amp;auto=webp&amp;s=6d6ca632d8c63e6d4e41ff8dbe4600528a4445b2",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=128&amp;height=128&amp;auto=webp&amp;s=1f2ed12b4e132e68d553c702d6639a3dc065821c",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "To the MOON.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Stonks Rising",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=16&amp;height=16&amp;auto=webp&amp;s=3bdbd7660aa0164072a243b6df9100da769e8278",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=32&amp;height=32&amp;auto=webp&amp;s=30aa8ad7b30c73defb1b1b49dc055f42c8c39fcc",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=48&amp;height=48&amp;auto=webp&amp;s=a5109b271dbe4f27927ee8bac7f23d1962a44936",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=64&amp;height=64&amp;auto=webp&amp;s=6d6ca632d8c63e6d4e41ff8dbe4600528a4445b2",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png?width=128&amp;height=128&amp;auto=webp&amp;s=1f2ed12b4e132e68d553c702d6639a3dc065821c",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/s5edqq9abef41_StonksRising.png"
              },
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 200,
                "resized_tier_icons": null,
                "id": "award_1703f934-cf44-40cc-a96d-3729d0b48262",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=16&amp;height=16&amp;auto=webp&amp;s=e3adc32e42cf534e27afea719ff932b1ce797cfd",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=32&amp;height=32&amp;auto=webp&amp;s=08542909c94777e870c41a35413bce688ca2fd6c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=48&amp;height=48&amp;auto=webp&amp;s=4d85746d584b5494087da3561944d6d241f57674",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=64&amp;height=64&amp;auto=webp&amp;s=fd7683c8de2839998a432e7e53e1e06d66c35ad3",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=128&amp;height=128&amp;auto=webp&amp;s=a750da7a573bb231bd863be9725abece0332b828",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "My kindergarten teacher, my cat, my mom, and you.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 3,
                "static_icon_height": 2048,
                "name": "I'd Like to Thank...",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=16&amp;height=16&amp;auto=webp&amp;s=e3adc32e42cf534e27afea719ff932b1ce797cfd",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=32&amp;height=32&amp;auto=webp&amp;s=08542909c94777e870c41a35413bce688ca2fd6c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=48&amp;height=48&amp;auto=webp&amp;s=4d85746d584b5494087da3561944d6d241f57674",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=64&amp;height=64&amp;auto=webp&amp;s=fd7683c8de2839998a432e7e53e1e06d66c35ad3",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png?width=128&amp;height=128&amp;auto=webp&amp;s=a750da7a573bb231bd863be9725abece0332b828",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/8ad2jffnclf41_Thanks.png"
              },
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 150,
                "resized_tier_icons": null,
                "id": "award_77ba55a2-c33c-4351-ac49-807455a80148",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Prayers up for the blessed.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 5,
                "static_icon_height": 2048,
                "name": "Bless Up",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png"
              },
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 125,
                "resized_tier_icons": null,
                "id": "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "When you come across a feel-good thing.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Wholesome",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
              },
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 100,
                "resized_tier_icons": null,
                "id": "gid_1",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 512,
                "static_icon_width": 512,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Shows the Silver Award... and that's it.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 3,
                "static_icon_height": 512,
                "name": "Silver",
                "resized_static_icons": [
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 512,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 75,
                "resized_tier_icons": null,
                "id": "award_ce5f9ce6-49d9-4905-9228-22950e889206",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a3164ef705ae0a41198e29767e4a51fd86e2dcd",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=32&amp;height=32&amp;auto=webp&amp;s=5c621179e63f7f6fbb6a0807367bd79467878784",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=48&amp;height=48&amp;auto=webp&amp;s=ebf40f79a711e9c4206f5f841235e43697f7a3f5",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=64&amp;height=64&amp;auto=webp&amp;s=18dad26bb669e202c42ff6b742d6c0f9d1e62ee9",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=128&amp;height=128&amp;auto=webp&amp;s=61ccae2b32cfbf2f26bd53c9d1287d1235da4d68",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Everything's better with a good hug",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 3,
                "static_icon_height": 2048,
                "name": "Hugz",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a3164ef705ae0a41198e29767e4a51fd86e2dcd",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=32&amp;height=32&amp;auto=webp&amp;s=5c621179e63f7f6fbb6a0807367bd79467878784",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=48&amp;height=48&amp;auto=webp&amp;s=ebf40f79a711e9c4206f5f841235e43697f7a3f5",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=64&amp;height=64&amp;auto=webp&amp;s=18dad26bb669e202c42ff6b742d6c0f9d1e62ee9",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=128&amp;height=128&amp;auto=webp&amp;s=61ccae2b32cfbf2f26bd53c9d1287d1235da4d68",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 70,
                "resized_tier_icons": null,
                "id": "award_b92370bb-b7de-4fb3-9608-c5b4a22f714a",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=16&amp;height=16&amp;auto=webp&amp;s=bbe4efb7b7ea2ecacd9609c937941282019a511f",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=32&amp;height=32&amp;auto=webp&amp;s=7aa65fa1bbd9dd3482e18cae220a6acbbabd6452",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=48&amp;height=48&amp;auto=webp&amp;s=a7b1d9f0629a00bc081d6db45a01c14720841969",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=64&amp;height=64&amp;auto=webp&amp;s=ee0ceaa18ec2902fcb59a89bb93dfb440ce7bcf5",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=128&amp;height=128&amp;auto=webp&amp;s=f3c3ed580426898ffd2df864e1111c957f71adf3",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Show nature some love.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Tree Hug",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=16&amp;height=16&amp;auto=webp&amp;s=bbe4efb7b7ea2ecacd9609c937941282019a511f",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=32&amp;height=32&amp;auto=webp&amp;s=7aa65fa1bbd9dd3482e18cae220a6acbbabd6452",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=48&amp;height=48&amp;auto=webp&amp;s=a7b1d9f0629a00bc081d6db45a01c14720841969",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=64&amp;height=64&amp;auto=webp&amp;s=ee0ceaa18ec2902fcb59a89bb93dfb440ce7bcf5",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png?width=128&amp;height=128&amp;auto=webp&amp;s=f3c3ed580426898ffd2df864e1111c957f71adf3",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/fukjtec638u41_TreeHug.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 70,
                "resized_tier_icons": null,
                "id": "award_7becef23-fb0b-4d62-b8a6-01d5759367cb",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=16&amp;height=16&amp;auto=webp&amp;s=19c8ba1570a2447a04354e05a9463f3d2063f522",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=32&amp;height=32&amp;auto=webp&amp;s=6222517b5d76c737ce1ad1ab55c42e3ce53c11d7",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=48&amp;height=48&amp;auto=webp&amp;s=5f5d88a13a1a514298ec5c7edc6f2506750f3c4a",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=64&amp;height=64&amp;auto=webp&amp;s=3af85a35bcd871d432337f309f6ea333181b4092",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=128&amp;height=128&amp;auto=webp&amp;s=4631e5c3e2cda226cb2725e9eff118c7b419a95e",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "When goodness lifts you",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 2,
                "static_icon_height": 2048,
                "name": "Faith In Humanity Restored",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=16&amp;height=16&amp;auto=webp&amp;s=19c8ba1570a2447a04354e05a9463f3d2063f522",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=32&amp;height=32&amp;auto=webp&amp;s=6222517b5d76c737ce1ad1ab55c42e3ce53c11d7",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=48&amp;height=48&amp;auto=webp&amp;s=5f5d88a13a1a514298ec5c7edc6f2506750f3c4a",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=64&amp;height=64&amp;auto=webp&amp;s=3af85a35bcd871d432337f309f6ea333181b4092",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=128&amp;height=128&amp;auto=webp&amp;s=4631e5c3e2cda226cb2725e9eff118c7b419a95e",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 50,
                "resized_tier_icons": null,
                "id": "award_02d9ab2c-162e-4c01-8438-317a016ed3d9",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "I'm in this with you.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 5,
                "static_icon_height": 2048,
                "name": "Take My Energy",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 30,
                "resized_tier_icons": null,
                "id": "award_80d4d339-95d0-43ac-b051-bc3fe0a9bab8",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=16&amp;height=16&amp;auto=webp&amp;s=b1a8234a0a122785991d6e6f8a4e0342525196fb",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=32&amp;height=32&amp;auto=webp&amp;s=d18080390a3a15888b1fb45f6310b0362e97d1c9",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=48&amp;height=48&amp;auto=webp&amp;s=d19c39d1fcfc71fe7f4eb2ba1a52d18d8f063b6e",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=64&amp;height=64&amp;auto=webp&amp;s=d4bdebbc07f33dcb808bcdd14ca3a0095719bb13",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=128&amp;height=128&amp;auto=webp&amp;s=c569e8342e4e2c9c8fb9f4afab3b8e51a9fe3b2a",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Keep the community and yourself healthy and happy.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 2,
                "static_icon_height": 2048,
                "name": "Wearing is Caring",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=16&amp;height=16&amp;auto=webp&amp;s=b1a8234a0a122785991d6e6f8a4e0342525196fb",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=32&amp;height=32&amp;auto=webp&amp;s=d18080390a3a15888b1fb45f6310b0362e97d1c9",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=48&amp;height=48&amp;auto=webp&amp;s=d19c39d1fcfc71fe7f4eb2ba1a52d18d8f063b6e",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=64&amp;height=64&amp;auto=webp&amp;s=d4bdebbc07f33dcb808bcdd14ca3a0095719bb13",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=128&amp;height=128&amp;auto=webp&amp;s=c569e8342e4e2c9c8fb9f4afab3b8e51a9fe3b2a",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 20,
                "resized_tier_icons": null,
                "id": "award_d33fddd7-a58a-4472-b1a2-3157d8c8b76f",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://i.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://i.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://i.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://i.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://i.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 512,
                "static_icon_width": 512,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Looking like your working is hard work. Happy Labor Day!",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 512,
                "name": "Looking Busy",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png?width=16&amp;height=16&amp;auto=webp&amp;s=db9e29688c05aeb51dafbcd54ec1dcfab3bb47dc",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png?width=32&amp;height=32&amp;auto=webp&amp;s=46adbd135d36ba32a7709877e99ff7a126af367b",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png?width=48&amp;height=48&amp;auto=webp&amp;s=f3118b3d29ca5d2a3c6e941a0b874c9b66dd7f7b",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png?width=64&amp;height=64&amp;auto=webp&amp;s=50f2d89d742aa628382b07bea320a4673821cbca",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png?width=128&amp;height=128&amp;auto=webp&amp;s=ebbcf8563d42edc4fd85e52933dafaecb6a849b7",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "APNG",
                "icon_height": 512,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/k0qzautvyyk51_LookingBusy.png"
              }
            ],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Skåne",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "ioa61d",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Kaldea",
            "discussion_type": null,
            "num_comments": 238,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/ioa61d/lofi_swiphop_oc/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/uvf90xb71rl51.png",
            "subreddit_subscribers": 305685,
            "created_utc": 1599494678,
            "num_crossposts": 6,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_3dq32gv",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Tydligen min tårt-dag idag. Jag har ingen tårta dock, ta en bild på kungen i en stridsvagn istället.",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iorvu0",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.89,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 94,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": "b3a39f8e-30e3-11e2-acce-12313b0ce1e2",
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 94,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/CtDEVMPpJO6QWkZTdOYoqIKj5uJJkIu7_MwXvc1nxPA.jpg",
            "author_cakeday": true,
            "edited": false,
            "author_flair_css_class": "flag stockholm",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Stockholm"
              }
            ],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599593390,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/d33uy359twl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/d33uy359twl51.jpg?auto=webp&amp;s=479281b3aaf8c613ed61e6b0dda584b406596a58",
                    "width": 534,
                    "height": 700
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/d33uy359twl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=9f715fcc0f1f2b38961f9102f28c5a0cc49a53c6",
                      "width": 108,
                      "height": 141
                    },
                    {
                      "url": "https://preview.redd.it/d33uy359twl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=6baf732968ba5a131c323551bd5a86cb25a97099",
                      "width": 216,
                      "height": 283
                    },
                    {
                      "url": "https://preview.redd.it/d33uy359twl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d4acdaa4cbdd5dd27d1637c73acfc5c1c67ac80b",
                      "width": 320,
                      "height": 419
                    }
                  ],
                  "variants": {},
                  "id": "AZF9Dop6-BWw1fE-P2zWX5jwluuuHlLbkdYAAvJJaj8"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Stockholm",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iorvu0",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Herrgul",
            "discussion_type": null,
            "num_comments": 8,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/iorvu0/tydligen_min_tårtdag_idag_jag_har_ingen_tårta/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/d33uy359twl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599564590,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_bmzx0",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "EU Membership Referendum: Norway and Sweden",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iorxht",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.89,
            "author_flair_background_color": "",
            "subreddit_type": "public",
            "ups": 27,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 27,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/FIHDUXzoidqmd43r10Z3hi6ohJ0H_Y1cLKUuP7d0k8M.jpg",
            "edited": false,
            "author_flair_css_class": "flag landskap-vastergotland",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Västergötland"
              }
            ],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "crosspost_parent_list": [
              {
                "approved_at_utc": null,
                "subreddit": "MapPorn",
                "selftext": "",
                "author_fullname": "t2_7qghv3lw",
                "saved": false,
                "mod_reason_title": null,
                "gilded": 0,
                "clicked": false,
                "title": "EU Membership Referendum: Norway and Sweden",
                "link_flair_richtext": [],
                "subreddit_name_prefixed": "r/MapPorn",
                "hidden": false,
                "pwls": 6,
                "link_flair_css_class": null,
                "downs": 0,
                "thumbnail_height": 140,
                "top_awarded_type": null,
                "hide_score": false,
                "name": "t3_ioo8dz",
                "quarantine": false,
                "link_flair_text_color": "dark",
                "upvote_ratio": 0.99,
                "author_flair_background_color": null,
                "subreddit_type": "public",
                "ups": 1470,
                "total_awards_received": 1,
                "media_embed": {},
                "thumbnail_width": 140,
                "author_flair_template_id": null,
                "is_original_content": false,
                "user_reports": [],
                "secure_media": null,
                "is_reddit_media_domain": true,
                "is_meta": false,
                "category": null,
                "secure_media_embed": {},
                "link_flair_text": null,
                "can_mod_post": false,
                "score": 1470,
                "approved_by": null,
                "author_premium": false,
                "thumbnail": "https://b.thumbs.redditmedia.com/FIHDUXzoidqmd43r10Z3hi6ohJ0H_Y1cLKUuP7d0k8M.jpg",
                "edited": false,
                "author_flair_css_class": null,
                "author_flair_richtext": [],
                "gildings": {},
                "post_hint": "image",
                "content_categories": null,
                "is_self": false,
                "mod_note": null,
                "created": 1599573289,
                "link_flair_type": "text",
                "wls": 6,
                "removed_by_category": null,
                "banned_by": null,
                "author_flair_type": "text",
                "domain": "i.redd.it",
                "allow_live_comments": false,
                "selftext_html": null,
                "likes": null,
                "suggested_sort": null,
                "banned_at_utc": null,
                "url_overridden_by_dest": "https://i.redd.it/np6xbr7h5vl51.jpg",
                "view_count": null,
                "archived": false,
                "no_follow": false,
                "is_crosspostable": false,
                "pinned": false,
                "over_18": false,
                "preview": {
                  "images": [
                    {
                      "source": {
                        "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?auto=webp&amp;s=8f7e3a7866594f3467d75db5a6bf47663cd37f75",
                        "width": 2276,
                        "height": 3312
                      },
                      "resolutions": [
                        {
                          "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=d2fe383c8c59db25b1323fddd89620c92d44dc92",
                          "width": 108,
                          "height": 157
                        },
                        {
                          "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=e5c34b4d8e9459616a0097612a5aade20b20185e",
                          "width": 216,
                          "height": 314
                        },
                        {
                          "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=2bd3b8f9f158221beaa5f7958e7cc65de0851b51",
                          "width": 320,
                          "height": 465
                        },
                        {
                          "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=6c6dd28fdc7f63852d5f3454050230114f0a7b4d",
                          "width": 640,
                          "height": 931
                        },
                        {
                          "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=2779f93e6eae03984f20e74cbf53ce09400d8789",
                          "width": 960,
                          "height": 1396
                        },
                        {
                          "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=12a27ea1861225f2349d9c374678f3aa70cdb904",
                          "width": 1080,
                          "height": 1571
                        }
                      ],
                      "variants": {},
                      "id": "5OV2ZoMLKl_crlbWTyFBSszMYey6t5-uZslqFVFaGgE"
                    }
                  ],
                  "enabled": true
                },
                "all_awardings": [
                  {
                    "giver_coin_reward": null,
                    "subreddit_id": null,
                    "is_new": false,
                    "days_of_drip_extension": 0,
                    "coin_price": 150,
                    "resized_tier_icons": null,
                    "id": "award_77ba55a2-c33c-4351-ac49-807455a80148",
                    "penny_donate": null,
                    "award_sub_type": "GLOBAL",
                    "coin_reward": 0,
                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png",
                    "days_of_premium": 0,
                    "tiers_by_required_awardings": null,
                    "resized_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_width": 2048,
                    "static_icon_width": 2048,
                    "start_date": null,
                    "is_enabled": true,
                    "awardings_required_to_grant_benefits": null,
                    "description": "Prayers up for the blessed.",
                    "end_date": null,
                    "subreddit_coin_reward": 0,
                    "count": 1,
                    "static_icon_height": 2048,
                    "name": "Bless Up",
                    "resized_static_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_format": null,
                    "icon_height": 2048,
                    "penny_price": null,
                    "award_type": "global",
                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png"
                  }
                ],
                "awarders": [],
                "media_only": false,
                "can_gild": false,
                "spoiler": false,
                "locked": false,
                "author_flair_text": null,
                "treatment_tags": [],
                "visited": false,
                "removed_by": null,
                "num_reports": null,
                "distinguished": null,
                "subreddit_id": "t5_2si92",
                "mod_reason_by": null,
                "removal_reason": null,
                "link_flair_background_color": "",
                "id": "ioo8dz",
                "is_robot_indexable": true,
                "report_reasons": null,
                "author": "ephcs",
                "discussion_type": null,
                "num_comments": 159,
                "send_replies": true,
                "whitelist_status": "all_ads",
                "contest_mode": false,
                "mod_reports": [],
                "author_patreon_flair": false,
                "author_flair_text_color": null,
                "permalink": "/r/MapPorn/comments/ioo8dz/eu_membership_referendum_norway_and_sweden/",
                "parent_whitelist_status": "all_ads",
                "stickied": false,
                "url": "https://i.redd.it/np6xbr7h5vl51.jpg",
                "subreddit_subscribers": 1092724,
                "created_utc": 1599544489,
                "num_crossposts": 2,
                "media": null,
                "is_video": false
              }
            ],
            "created": 1599593617,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/np6xbr7h5vl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?auto=webp&amp;s=8f7e3a7866594f3467d75db5a6bf47663cd37f75",
                    "width": 2276,
                    "height": 3312
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=d2fe383c8c59db25b1323fddd89620c92d44dc92",
                      "width": 108,
                      "height": 157
                    },
                    {
                      "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=e5c34b4d8e9459616a0097612a5aade20b20185e",
                      "width": 216,
                      "height": 314
                    },
                    {
                      "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=2bd3b8f9f158221beaa5f7958e7cc65de0851b51",
                      "width": 320,
                      "height": 465
                    },
                    {
                      "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=6c6dd28fdc7f63852d5f3454050230114f0a7b4d",
                      "width": 640,
                      "height": 931
                    },
                    {
                      "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=2779f93e6eae03984f20e74cbf53ce09400d8789",
                      "width": 960,
                      "height": 1396
                    },
                    {
                      "url": "https://preview.redd.it/np6xbr7h5vl51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=12a27ea1861225f2349d9c374678f3aa70cdb904",
                      "width": 1080,
                      "height": 1571
                    }
                  ],
                  "variants": {},
                  "id": "5OV2ZoMLKl_crlbWTyFBSszMYey6t5-uZslqFVFaGgE"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Västergötland",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iorxht",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "majskatt",
            "discussion_type": null,
            "num_comments": 4,
            "send_replies": false,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "crosspost_parent": "t3_ioo8dz",
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/iorxht/eu_membership_referendum_norway_and_sweden/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/np6xbr7h5vl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599564817,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_62p8xxaf",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Swedish Lo-fi girl",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 78,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_io680n",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.96,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 1720,
            "total_awards_received": 3,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 1720,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/ZKUceZkgq3fPX8cSmK58TWyDUUX2cJs3acZae3shjqA.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599509001,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/3ady99q9upl51.png",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/3ady99q9upl51.png?auto=webp&amp;s=a18c210f33406b3849f26416b502a55e93519fe8",
                    "width": 960,
                    "height": 540
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/3ady99q9upl51.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=ff3516ce8885edd7ab37cf629e3f5023defc47c8",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://preview.redd.it/3ady99q9upl51.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=e4b92b92bd98108de13653368d88847045584042",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://preview.redd.it/3ady99q9upl51.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=a0e3d999d6647895bee2f612c46ae60ffd4ee3d2",
                      "width": 320,
                      "height": 180
                    },
                    {
                      "url": "https://preview.redd.it/3ady99q9upl51.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=c989ce5c325e4938185d48c373449fc12ec4bf72",
                      "width": 640,
                      "height": 360
                    },
                    {
                      "url": "https://preview.redd.it/3ady99q9upl51.png?width=960&amp;crop=smart&amp;auto=webp&amp;s=154e5160b603c664925c343d295743f280073ae2",
                      "width": 960,
                      "height": 540
                    }
                  ],
                  "variants": {},
                  "id": "HIQTShVfhTx_WV2hQ-OGT0hyh7oL4tjUbgfn6yECBaQ"
                }
              ],
              "enabled": true
            },
            "all_awardings": [
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 150,
                "resized_tier_icons": null,
                "id": "award_77ba55a2-c33c-4351-ac49-807455a80148",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Prayers up for the blessed.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Bless Up",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 75,
                "resized_tier_icons": null,
                "id": "award_ce5f9ce6-49d9-4905-9228-22950e889206",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a3164ef705ae0a41198e29767e4a51fd86e2dcd",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=32&amp;height=32&amp;auto=webp&amp;s=5c621179e63f7f6fbb6a0807367bd79467878784",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=48&amp;height=48&amp;auto=webp&amp;s=ebf40f79a711e9c4206f5f841235e43697f7a3f5",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=64&amp;height=64&amp;auto=webp&amp;s=18dad26bb669e202c42ff6b742d6c0f9d1e62ee9",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=128&amp;height=128&amp;auto=webp&amp;s=61ccae2b32cfbf2f26bd53c9d1287d1235da4d68",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Everything's better with a good hug",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 2,
                "static_icon_height": 2048,
                "name": "Hugz",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a3164ef705ae0a41198e29767e4a51fd86e2dcd",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=32&amp;height=32&amp;auto=webp&amp;s=5c621179e63f7f6fbb6a0807367bd79467878784",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=48&amp;height=48&amp;auto=webp&amp;s=ebf40f79a711e9c4206f5f841235e43697f7a3f5",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=64&amp;height=64&amp;auto=webp&amp;s=18dad26bb669e202c42ff6b742d6c0f9d1e62ee9",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png?width=128&amp;height=128&amp;auto=webp&amp;s=61ccae2b32cfbf2f26bd53c9d1287d1235da4d68",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5smbysczm1w41_Hugz.png"
              }
            ],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "io680n",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "svenskaknugensbarn",
            "discussion_type": null,
            "num_comments": 30,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/io680n/swedish_lofi_girl/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/3ady99q9upl51.png",
            "subreddit_subscribers": 305685,
            "created_utc": 1599480201,
            "num_crossposts": 1,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_nzxae",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "”Villapriserna har nått ett all time high”",
            "link_flair_richtext": [
              {
                "e": "text",
                "t": "Nyhet"
              }
            ],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": "category news",
            "downs": 0,
            "thumbnail_height": 73,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iopa0x",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.92,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 41,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": "Nyhet",
            "can_mod_post": false,
            "score": 41,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/a6w8xY7LwbzRTrkwiTZBi6wA0UyRZki9FcNIg42fHmQ.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "link",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599578800,
            "link_flair_type": "richtext",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "svt.se",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://www.svt.se/nyheter/inrikes/villapriserna-har-natt-ett-all-time-high",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/czjH4OQB_zeaIvxZ2jt92mzGkq8uf7mCB5V4bEbePSM.jpg?auto=webp&amp;s=f4d172fe48faa471465e8bcb1263a62e36ec5059",
                    "width": 650,
                    "height": 340
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/czjH4OQB_zeaIvxZ2jt92mzGkq8uf7mCB5V4bEbePSM.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=f687d0c2427fdce86aa11a2c6e2e0189d7529856",
                      "width": 108,
                      "height": 56
                    },
                    {
                      "url": "https://external-preview.redd.it/czjH4OQB_zeaIvxZ2jt92mzGkq8uf7mCB5V4bEbePSM.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=da8e77e348bed450984d13acc01d44b9a71145c7",
                      "width": 216,
                      "height": 112
                    },
                    {
                      "url": "https://external-preview.redd.it/czjH4OQB_zeaIvxZ2jt92mzGkq8uf7mCB5V4bEbePSM.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=0feffe81f4686f5a17d1d4ffed7ccd87ad4d7efb",
                      "width": 320,
                      "height": 167
                    },
                    {
                      "url": "https://external-preview.redd.it/czjH4OQB_zeaIvxZ2jt92mzGkq8uf7mCB5V4bEbePSM.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=76527c350b0cf78e44c9632e5582f9e0bf4384de",
                      "width": 640,
                      "height": 334
                    }
                  ],
                  "variants": {},
                  "id": "HjKNOtXffhOcbCEw5eo0-PCec5V8FayCzdvf4kPQf2Y"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iopa0x",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "atotal",
            "discussion_type": null,
            "num_comments": 112,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iopa0x/villapriserna_har_nått_ett_all_time_high/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://www.svt.se/nyheter/inrikes/villapriserna-har-natt-ett-all-time-high",
            "subreddit_subscribers": 305685,
            "created_utc": 1599550000,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "Videon hittar ni här! Enjoy!\n\n[https://www.youtube.com/watch?v=zUn7LL-JZ2U](https://www.youtube.com/watch?v=zUn7LL-JZ2U)",
            "author_fullname": "t2_50vdy",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Jag tyckte /u/Kaldeas fina Lo-fi bild behövde en passande låt i bakgrunden så jag gjorde helt enkelt en egen Lo-fi låt och la den som bakgrundsmusik till bilden.",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": null,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iopsxg",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.81,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 33,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": null,
            "author_flair_template_id": "90df7004-3895-11e2-9259-12313d051e91",
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 33,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "self",
            "edited": false,
            "author_flair_css_class": "flag landskap-uppland",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Uppland"
              }
            ],
            "gildings": {},
            "post_hint": "self",
            "content_categories": null,
            "is_self": true,
            "mod_note": null,
            "created": 1599581777,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "self.sweden",
            "allow_live_comments": false,
            "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Videon hittar ni här! Enjoy!&lt;/p&gt;\n\n&lt;p&gt;&lt;a href=\"https://www.youtube.com/watch?v=zUn7LL-JZ2U\"&gt;https://www.youtube.com/watch?v=zUn7LL-JZ2U&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/Rz24JBSxd8xY8dXdqT6ZzJNQzh-1xkoCMartp_2ct4w.jpg?auto=webp&amp;s=49207774da19adef22c79f157bee0efecb79aef3",
                    "width": 480,
                    "height": 360
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/Rz24JBSxd8xY8dXdqT6ZzJNQzh-1xkoCMartp_2ct4w.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=128045362fcb7a005cc040e61e653ce3fd875f66",
                      "width": 108,
                      "height": 81
                    },
                    {
                      "url": "https://external-preview.redd.it/Rz24JBSxd8xY8dXdqT6ZzJNQzh-1xkoCMartp_2ct4w.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=6ec7ebe6ab893cf5b10d8ac0f4e20bb146fbac21",
                      "width": 216,
                      "height": 162
                    },
                    {
                      "url": "https://external-preview.redd.it/Rz24JBSxd8xY8dXdqT6ZzJNQzh-1xkoCMartp_2ct4w.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=15a0400ebeef924222a4082a9b1823d6a5bdbc4d",
                      "width": 320,
                      "height": 240
                    }
                  ],
                  "variants": {},
                  "id": "4Mfk9oVECHSE8mYsEzEdhYUqogzk0j8KNjYMgY5qJQY"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Uppland",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iopsxg",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "abbbe91",
            "discussion_type": null,
            "num_comments": 6,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/iopsxg/jag_tyckte_ukaldeas_fina_lofi_bild_behövde_en/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://www.reddit.com/r/sweden/comments/iopsxg/jag_tyckte_ukaldeas_fina_lofi_bild_behövde_en/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599552977,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_3cg2to2g",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Ganska bra svenska ändå",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 136,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_io4fso",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.95,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 1967,
            "total_awards_received": 1,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": "b3a39f8e-30e3-11e2-acce-12313b0ce1e2",
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 1967,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/GnpEl00V5RILqkNNQNA6ttu5opgJfXLhv17RsPGtdMU.jpg",
            "edited": false,
            "author_flair_css_class": "flag stockholm",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Stockholm"
              }
            ],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "crosspost_parent_list": [
              {
                "approved_at_utc": null,
                "subreddit": "dankmemes",
                "selftext": "",
                "author_fullname": "t2_54u3r3kv",
                "saved": false,
                "mod_reason_title": null,
                "gilded": 0,
                "clicked": false,
                "title": "my caption is the flair",
                "link_flair_richtext": [
                  {
                    "e": "text",
                    "t": "I'm a whore for karma "
                  }
                ],
                "subreddit_name_prefixed": "r/dankmemes",
                "hidden": false,
                "pwls": 0,
                "link_flair_css_class": "",
                "downs": 0,
                "thumbnail_height": 136,
                "top_awarded_type": null,
                "hide_score": false,
                "name": "t3_io3gko",
                "quarantine": false,
                "link_flair_text_color": "dark",
                "upvote_ratio": 0.91,
                "author_flair_background_color": "",
                "subreddit_type": "public",
                "ups": 10144,
                "total_awards_received": 5,
                "media_embed": {},
                "thumbnail_width": 140,
                "author_flair_template_id": null,
                "is_original_content": false,
                "user_reports": [],
                "secure_media": null,
                "is_reddit_media_domain": true,
                "is_meta": false,
                "category": null,
                "secure_media_embed": {},
                "link_flair_text": "I'm a whore for karma ",
                "can_mod_post": false,
                "score": 10144,
                "approved_by": null,
                "author_premium": false,
                "thumbnail": "default",
                "edited": false,
                "author_flair_css_class": null,
                "author_flair_richtext": [
                  {
                    "e": "text",
                    "t": "☣️"
                  }
                ],
                "gildings": {},
                "content_categories": null,
                "is_self": false,
                "mod_note": null,
                "created": 1599494329,
                "link_flair_type": "richtext",
                "wls": 0,
                "removed_by_category": "moderator",
                "banned_by": null,
                "author_flair_type": "richtext",
                "domain": "i.redd.it",
                "allow_live_comments": true,
                "selftext_html": null,
                "likes": null,
                "suggested_sort": "top",
                "banned_at_utc": null,
                "url_overridden_by_dest": "https://i.redd.it/4c6erzsomol51.jpg",
                "view_count": null,
                "archived": false,
                "no_follow": false,
                "is_crosspostable": false,
                "pinned": false,
                "over_18": false,
                "all_awardings": [
                  {
                    "giver_coin_reward": null,
                    "subreddit_id": null,
                    "is_new": false,
                    "days_of_drip_extension": 0,
                    "coin_price": 150,
                    "resized_tier_icons": null,
                    "id": "award_77ba55a2-c33c-4351-ac49-807455a80148",
                    "penny_donate": null,
                    "award_sub_type": "GLOBAL",
                    "coin_reward": 0,
                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png",
                    "days_of_premium": 0,
                    "tiers_by_required_awardings": null,
                    "resized_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_width": 2048,
                    "static_icon_width": 2048,
                    "start_date": null,
                    "is_enabled": true,
                    "awardings_required_to_grant_benefits": null,
                    "description": "Prayers up for the blessed.",
                    "end_date": null,
                    "subreddit_coin_reward": 0,
                    "count": 1,
                    "static_icon_height": 2048,
                    "name": "Bless Up",
                    "resized_static_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_format": null,
                    "icon_height": 2048,
                    "penny_price": null,
                    "award_type": "global",
                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png"
                  },
                  {
                    "giver_coin_reward": null,
                    "subreddit_id": null,
                    "is_new": false,
                    "days_of_drip_extension": 0,
                    "coin_price": 125,
                    "resized_tier_icons": null,
                    "id": "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                    "penny_donate": null,
                    "award_sub_type": "GLOBAL",
                    "coin_reward": 0,
                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                    "days_of_premium": 0,
                    "tiers_by_required_awardings": null,
                    "resized_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_width": 2048,
                    "static_icon_width": 2048,
                    "start_date": null,
                    "is_enabled": true,
                    "awardings_required_to_grant_benefits": null,
                    "description": "When you come across a feel-good thing.",
                    "end_date": null,
                    "subreddit_coin_reward": 0,
                    "count": 2,
                    "static_icon_height": 2048,
                    "name": "Wholesome",
                    "resized_static_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_format": null,
                    "icon_height": 2048,
                    "penny_price": null,
                    "award_type": "global",
                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
                  },
                  {
                    "giver_coin_reward": 0,
                    "subreddit_id": null,
                    "is_new": false,
                    "days_of_drip_extension": 0,
                    "coin_price": 70,
                    "resized_tier_icons": null,
                    "id": "award_7becef23-fb0b-4d62-b8a6-01d5759367cb",
                    "penny_donate": 0,
                    "award_sub_type": "GLOBAL",
                    "coin_reward": 0,
                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png",
                    "days_of_premium": 0,
                    "tiers_by_required_awardings": null,
                    "resized_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=16&amp;height=16&amp;auto=webp&amp;s=19c8ba1570a2447a04354e05a9463f3d2063f522",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=32&amp;height=32&amp;auto=webp&amp;s=6222517b5d76c737ce1ad1ab55c42e3ce53c11d7",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=48&amp;height=48&amp;auto=webp&amp;s=5f5d88a13a1a514298ec5c7edc6f2506750f3c4a",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=64&amp;height=64&amp;auto=webp&amp;s=3af85a35bcd871d432337f309f6ea333181b4092",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=128&amp;height=128&amp;auto=webp&amp;s=4631e5c3e2cda226cb2725e9eff118c7b419a95e",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_width": 2048,
                    "static_icon_width": 2048,
                    "start_date": null,
                    "is_enabled": true,
                    "awardings_required_to_grant_benefits": null,
                    "description": "When goodness lifts you",
                    "end_date": null,
                    "subreddit_coin_reward": 0,
                    "count": 1,
                    "static_icon_height": 2048,
                    "name": "Faith In Humanity Restored",
                    "resized_static_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=16&amp;height=16&amp;auto=webp&amp;s=19c8ba1570a2447a04354e05a9463f3d2063f522",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=32&amp;height=32&amp;auto=webp&amp;s=6222517b5d76c737ce1ad1ab55c42e3ce53c11d7",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=48&amp;height=48&amp;auto=webp&amp;s=5f5d88a13a1a514298ec5c7edc6f2506750f3c4a",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=64&amp;height=64&amp;auto=webp&amp;s=3af85a35bcd871d432337f309f6ea333181b4092",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png?width=128&amp;height=128&amp;auto=webp&amp;s=4631e5c3e2cda226cb2725e9eff118c7b419a95e",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_format": "PNG",
                    "icon_height": 2048,
                    "penny_price": 0,
                    "award_type": "global",
                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/gva4vt20qc751_FaithInHumanityRestored.png"
                  },
                  {
                    "giver_coin_reward": 0,
                    "subreddit_id": null,
                    "is_new": false,
                    "days_of_drip_extension": 0,
                    "coin_price": 50,
                    "resized_tier_icons": null,
                    "id": "award_02d9ab2c-162e-4c01-8438-317a016ed3d9",
                    "penny_donate": 0,
                    "award_sub_type": "GLOBAL",
                    "coin_reward": 0,
                    "icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png",
                    "days_of_premium": 0,
                    "tiers_by_required_awardings": null,
                    "resized_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_width": 2048,
                    "static_icon_width": 2048,
                    "start_date": null,
                    "is_enabled": true,
                    "awardings_required_to_grant_benefits": null,
                    "description": "I'm in this with you.",
                    "end_date": null,
                    "subreddit_coin_reward": 0,
                    "count": 1,
                    "static_icon_height": 2048,
                    "name": "Take My Energy",
                    "resized_static_icons": [
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                        "width": 16,
                        "height": 16
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                        "width": 32,
                        "height": 32
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                        "width": 48,
                        "height": 48
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                        "width": 64,
                        "height": 64
                      },
                      {
                        "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                        "width": 128,
                        "height": 128
                      }
                    ],
                    "icon_format": "PNG",
                    "icon_height": 2048,
                    "penny_price": 0,
                    "award_type": "global",
                    "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png"
                  }
                ],
                "awarders": [],
                "media_only": false,
                "link_flair_template_id": "a1536fd0-99e0-11ea-b766-0e794b6e423d",
                "can_gild": false,
                "spoiler": false,
                "locked": false,
                "author_flair_text": "☣️",
                "treatment_tags": [],
                "visited": false,
                "removed_by": null,
                "num_reports": null,
                "distinguished": null,
                "subreddit_id": "t5_2zmfe",
                "mod_reason_by": null,
                "removal_reason": null,
                "link_flair_background_color": "#ffd635",
                "id": "io3gko",
                "is_robot_indexable": false,
                "report_reasons": null,
                "author": "Fluffycommunity",
                "discussion_type": null,
                "num_comments": 260,
                "send_replies": true,
                "whitelist_status": "no_ads",
                "contest_mode": false,
                "mod_reports": [],
                "author_patreon_flair": false,
                "author_flair_text_color": "dark",
                "permalink": "/r/dankmemes/comments/io3gko/my_caption_is_the_flair/",
                "parent_whitelist_status": "no_ads",
                "stickied": false,
                "url": "https://i.redd.it/4c6erzsomol51.jpg",
                "subreddit_subscribers": 3998366,
                "created_utc": 1599465529,
                "num_crossposts": 1,
                "media": null,
                "is_video": false
              }
            ],
            "created": 1599499737,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "i.redd.it",
            "allow_live_comments": true,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/4c6erzsomol51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/4c6erzsomol51.jpg?auto=webp&amp;s=cab86f92ae14846113402a292e6c1b73deb0c27e",
                    "width": 1242,
                    "height": 1210
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/4c6erzsomol51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=a2263dadf20de4d57966fd5e47970ed8b95fe3c4",
                      "width": 108,
                      "height": 105
                    },
                    {
                      "url": "https://preview.redd.it/4c6erzsomol51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=07ce97c5badebd3ad0e9d4a1c0e37b768adbde90",
                      "width": 216,
                      "height": 210
                    },
                    {
                      "url": "https://preview.redd.it/4c6erzsomol51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=66c4fc629c2470fbacc97d895e882d0ccf592f8c",
                      "width": 320,
                      "height": 311
                    },
                    {
                      "url": "https://preview.redd.it/4c6erzsomol51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=7e4839f8603a08972a304ec223c77ebb03295e44",
                      "width": 640,
                      "height": 623
                    },
                    {
                      "url": "https://preview.redd.it/4c6erzsomol51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=76051019c99cc5c249c276146eac80b8efa4319d",
                      "width": 960,
                      "height": 935
                    },
                    {
                      "url": "https://preview.redd.it/4c6erzsomol51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=2d58cfc0e458c199f61d64b0a7feeb7e0527ee9b",
                      "width": 1080,
                      "height": 1052
                    }
                  ],
                  "variants": {},
                  "id": "WUK7T8tSBMXsXSiJIevA-AtSQlEKnXhzi0JRSi3-Tz4"
                }
              ],
              "enabled": true
            },
            "all_awardings": [
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 50,
                "resized_tier_icons": null,
                "id": "award_02d9ab2c-162e-4c01-8438-317a016ed3d9",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "I'm in this with you.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Take My Energy",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png"
              }
            ],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Stockholm",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "io4fso",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "-MmmMm-sNiCKeRS-",
            "discussion_type": null,
            "num_comments": 105,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "crosspost_parent": "t3_io3gko",
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/io4fso/ganska_bra_svenska_ändå/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/4c6erzsomol51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599470937,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_6ma7xx25",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Omni - Ministerfru riskerar tio års fängelse för fejkade hot",
            "link_flair_richtext": [
              {
                "e": "text",
                "t": "Nyhet"
              }
            ],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": "category news",
            "downs": 0,
            "thumbnail_height": 73,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iop1zu",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.78,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 30,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": "Nyhet",
            "can_mod_post": false,
            "score": 30,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/TF4IcK2IQHKosEz6hCS85RhPuRB9_jFZlMF_cnp6IEw.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "link",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599577586,
            "link_flair_type": "richtext",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "omni.se",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://omni.se/ministerfru-riskerar-tio-ars-fangelse-for-fejkade-hot/a/Ep4dOa",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/PoaOmEAL0ZLLXplvigkYElGK9y1g1NPcsfj139OneAY.jpg?auto=webp&amp;s=4502e0296c6a98dd4e810b8d641287ea11dfe7f1",
                    "width": 1200,
                    "height": 630
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/PoaOmEAL0ZLLXplvigkYElGK9y1g1NPcsfj139OneAY.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=3334fd02d0f97ad3eefbfdc6539edefab3a3959e",
                      "width": 108,
                      "height": 56
                    },
                    {
                      "url": "https://external-preview.redd.it/PoaOmEAL0ZLLXplvigkYElGK9y1g1NPcsfj139OneAY.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=771177415845c9f5e898510ddcd4ca741feea788",
                      "width": 216,
                      "height": 113
                    },
                    {
                      "url": "https://external-preview.redd.it/PoaOmEAL0ZLLXplvigkYElGK9y1g1NPcsfj139OneAY.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=4ac7a110104c3b013cef982ccb64a05aeff439f7",
                      "width": 320,
                      "height": 168
                    },
                    {
                      "url": "https://external-preview.redd.it/PoaOmEAL0ZLLXplvigkYElGK9y1g1NPcsfj139OneAY.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=e3f6c8fec681680f7730682cba401f7db5f94b7b",
                      "width": 640,
                      "height": 336
                    },
                    {
                      "url": "https://external-preview.redd.it/PoaOmEAL0ZLLXplvigkYElGK9y1g1NPcsfj139OneAY.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=cd57af30239d40f9b53c8f6a652946daef7fd140",
                      "width": 960,
                      "height": 504
                    },
                    {
                      "url": "https://external-preview.redd.it/PoaOmEAL0ZLLXplvigkYElGK9y1g1NPcsfj139OneAY.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=e82610c5e4cf3f3427ad613c43a50667e8b2a422",
                      "width": 1080,
                      "height": 567
                    }
                  ],
                  "variants": {},
                  "id": "YGhOXvv_bfsaRLthRfjV34xZQu1ML8Wdv_XRpqUazAw"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iop1zu",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "928346930465891356",
            "discussion_type": null,
            "num_comments": 6,
            "send_replies": false,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iop1zu/omni_ministerfru_riskerar_tio_års_fängelse_för/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://omni.se/ministerfru-riskerar-tio-ars-fangelse-for-fejkade-hot/a/Ep4dOa",
            "subreddit_subscribers": 305685,
            "created_utc": 1599548786,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_75118",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "En helt vanlig förmiddag i Linköping",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_ioq0za",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.83,
            "author_flair_background_color": "",
            "subreddit_type": "public",
            "ups": 23,
            "total_awards_received": 0,
            "media_embed": {
              "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2Fggb45m&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2Fggb45m&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2Fggb45m.jpg%3FExpires%3D1599813480%26Signature%3DE8qCxtdPvaUMa-6LHlVmWlS7kLcdQNR11p-NSkxXocbthOk9Z2acvenk-yzDhL-LvSF8YyQ8gNDYho-tvhFoxZz2%7ErwR-lhsZAZ3ZEGHjOb4mqbsvwzXMC1qmXTCsip6iCAO7P9JqgEQ4pHKuJzZigsAC2rT1LQOrOTPd8RG9BQad2LaJYnYB9LAreLoCw5Wkm5TKY-aEiJ912%7EqzIvIFOdz%7E3si8p0BIe1PTAj-v%7EzSjouyFWm%7EF0eT9yGSkkc9OqsoOsTn14uvQf3bvCAvWWpWODaczsnSGO7edNxzliAQoPfHeub-2WxuHytScBf9G4FApqDgMqR%7EL-ikmk830g__%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"405\" height=\"720\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
              "width": 405,
              "scrolling": false,
              "height": 720
            },
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": {
              "type": "streamable.com",
              "oembed": {
                "provider_url": "https://streamable.com",
                "description": "Watch this video on Streamable.",
                "title": "Streamable Video",
                "type": "video",
                "thumbnail_width": 1080,
                "height": 720,
                "width": 405,
                "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2Fggb45m&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2Fggb45m&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2Fggb45m.jpg%3FExpires%3D1599813480%26Signature%3DE8qCxtdPvaUMa-6LHlVmWlS7kLcdQNR11p-NSkxXocbthOk9Z2acvenk-yzDhL-LvSF8YyQ8gNDYho-tvhFoxZz2%7ErwR-lhsZAZ3ZEGHjOb4mqbsvwzXMC1qmXTCsip6iCAO7P9JqgEQ4pHKuJzZigsAC2rT1LQOrOTPd8RG9BQad2LaJYnYB9LAreLoCw5Wkm5TKY-aEiJ912%7EqzIvIFOdz%7E3si8p0BIe1PTAj-v%7EzSjouyFWm%7EF0eT9yGSkkc9OqsoOsTn14uvQf3bvCAvWWpWODaczsnSGO7edNxzliAQoPfHeub-2WxuHytScBf9G4FApqDgMqR%7EL-ikmk830g__%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"405\" height=\"720\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
                "version": "1.0",
                "provider_name": "Streamable",
                "thumbnail_url": "https://cdn-cf-east.streamable.com/image/ggb45m.jpg?Expires=1599813480&amp;Signature=E8qCxtdPvaUMa-6LHlVmWlS7kLcdQNR11p-NSkxXocbthOk9Z2acvenk-yzDhL-LvSF8YyQ8gNDYho-tvhFoxZz2~rwR-lhsZAZ3ZEGHjOb4mqbsvwzXMC1qmXTCsip6iCAO7P9JqgEQ4pHKuJzZigsAC2rT1LQOrOTPd8RG9BQad2LaJYnYB9LAreLoCw5Wkm5TKY-aEiJ912~qzIvIFOdz~3si8p0BIe1PTAj-v~zSjouyFWm~F0eT9yGSkkc9OqsoOsTn14uvQf3bvCAvWWpWODaczsnSGO7edNxzliAQoPfHeub-2WxuHytScBf9G4FApqDgMqR~L-ikmk830g__&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
                "thumbnail_height": 1920
              }
            },
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {
              "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2Fggb45m&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2Fggb45m&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2Fggb45m.jpg%3FExpires%3D1599813480%26Signature%3DE8qCxtdPvaUMa-6LHlVmWlS7kLcdQNR11p-NSkxXocbthOk9Z2acvenk-yzDhL-LvSF8YyQ8gNDYho-tvhFoxZz2%7ErwR-lhsZAZ3ZEGHjOb4mqbsvwzXMC1qmXTCsip6iCAO7P9JqgEQ4pHKuJzZigsAC2rT1LQOrOTPd8RG9BQad2LaJYnYB9LAreLoCw5Wkm5TKY-aEiJ912%7EqzIvIFOdz%7E3si8p0BIe1PTAj-v%7EzSjouyFWm%7EF0eT9yGSkkc9OqsoOsTn14uvQf3bvCAvWWpWODaczsnSGO7edNxzliAQoPfHeub-2WxuHytScBf9G4FApqDgMqR%7EL-ikmk830g__%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"405\" height=\"720\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
              "width": 405,
              "scrolling": false,
              "media_domain_url": "https://www.redditmedia.com/mediaembed/ioq0za",
              "height": 720
            },
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 23,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://a.thumbs.redditmedia.com/CGyAx9W26I98Pk_nLPfEAIamZhC4Z7B9kANOtNB5qW0.jpg",
            "edited": false,
            "author_flair_css_class": "flag landskap-ostergotland",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Östergötland"
              }
            ],
            "gildings": {},
            "post_hint": "rich:video",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599583111,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "streamable.com",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://streamable.com/ggb45m",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/tbXEMlfzPqtgfdT-WoOYj7AnVntOWh1is2VByeWSUnA.jpg?auto=webp&amp;s=d63195baa18f69ce8d9e180021ad14f28e52f4ef",
                    "width": 1080,
                    "height": 1920
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/tbXEMlfzPqtgfdT-WoOYj7AnVntOWh1is2VByeWSUnA.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=9262e2bbc10ca53bfe12a98ef4e438f538200989",
                      "width": 108,
                      "height": 192
                    },
                    {
                      "url": "https://external-preview.redd.it/tbXEMlfzPqtgfdT-WoOYj7AnVntOWh1is2VByeWSUnA.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=52c03a68f09313890669a769bbe6a3889d1262d1",
                      "width": 216,
                      "height": 384
                    },
                    {
                      "url": "https://external-preview.redd.it/tbXEMlfzPqtgfdT-WoOYj7AnVntOWh1is2VByeWSUnA.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=91f64ff8f4df9bbbcd3e31307db9855fa6170d26",
                      "width": 320,
                      "height": 568
                    },
                    {
                      "url": "https://external-preview.redd.it/tbXEMlfzPqtgfdT-WoOYj7AnVntOWh1is2VByeWSUnA.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=8e80d436bea63ec60f98d28f17313ee60dbf27a6",
                      "width": 640,
                      "height": 1137
                    },
                    {
                      "url": "https://external-preview.redd.it/tbXEMlfzPqtgfdT-WoOYj7AnVntOWh1is2VByeWSUnA.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=9871aabdc235cdfd2bf36185132a95f3de460789",
                      "width": 960,
                      "height": 1706
                    },
                    {
                      "url": "https://external-preview.redd.it/tbXEMlfzPqtgfdT-WoOYj7AnVntOWh1is2VByeWSUnA.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=917decd4daafb07eaabaa3c287e21aec471fe6e4",
                      "width": 1080,
                      "height": 1920
                    }
                  ],
                  "variants": {},
                  "id": "H6lamDYMjrsqyvcjqUQvS7IeHH0uB56tk7sVg_aC0ko"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Östergötland",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "ioq0za",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "ph0gelbice",
            "discussion_type": null,
            "num_comments": 6,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/ioq0za/en_helt_vanlig_förmiddag_i_linköping/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://streamable.com/ggb45m",
            "subreddit_subscribers": 305685,
            "created_utc": 1599554311,
            "num_crossposts": 0,
            "media": {
              "type": "streamable.com",
              "oembed": {
                "provider_url": "https://streamable.com",
                "description": "Watch this video on Streamable.",
                "title": "Streamable Video",
                "type": "video",
                "thumbnail_width": 1080,
                "height": 720,
                "width": 405,
                "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2Fggb45m&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2Fggb45m&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2Fggb45m.jpg%3FExpires%3D1599813480%26Signature%3DE8qCxtdPvaUMa-6LHlVmWlS7kLcdQNR11p-NSkxXocbthOk9Z2acvenk-yzDhL-LvSF8YyQ8gNDYho-tvhFoxZz2%7ErwR-lhsZAZ3ZEGHjOb4mqbsvwzXMC1qmXTCsip6iCAO7P9JqgEQ4pHKuJzZigsAC2rT1LQOrOTPd8RG9BQad2LaJYnYB9LAreLoCw5Wkm5TKY-aEiJ912%7EqzIvIFOdz%7E3si8p0BIe1PTAj-v%7EzSjouyFWm%7EF0eT9yGSkkc9OqsoOsTn14uvQf3bvCAvWWpWODaczsnSGO7edNxzliAQoPfHeub-2WxuHytScBf9G4FApqDgMqR%7EL-ikmk830g__%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"405\" height=\"720\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
                "version": "1.0",
                "provider_name": "Streamable",
                "thumbnail_url": "https://cdn-cf-east.streamable.com/image/ggb45m.jpg?Expires=1599813480&amp;Signature=E8qCxtdPvaUMa-6LHlVmWlS7kLcdQNR11p-NSkxXocbthOk9Z2acvenk-yzDhL-LvSF8YyQ8gNDYho-tvhFoxZz2~rwR-lhsZAZ3ZEGHjOb4mqbsvwzXMC1qmXTCsip6iCAO7P9JqgEQ4pHKuJzZigsAC2rT1LQOrOTPd8RG9BQad2LaJYnYB9LAreLoCw5Wkm5TKY-aEiJ912~qzIvIFOdz~3si8p0BIe1PTAj-v~zSjouyFWm~F0eT9yGSkkc9OqsoOsTn14uvQf3bvCAvWWpWODaczsnSGO7edNxzliAQoPfHeub-2WxuHytScBf9G4FApqDgMqR~L-ikmk830g__&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
                "thumbnail_height": 1920
              }
            },
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_j51ex",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Snart på Netflix",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": true,
            "name": "t3_iosq3k",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.92,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 10,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 10,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/ug3ws9TCy22wi1nkuK7LAG0dkgr4CLRz01u3p3SejHM.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599597251,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.imgur.com",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.imgur.com/DXFoMNV.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/O4nu_0dDKRGwxKmSnrPFk5iOtSZ0d7QAtT08VLoXGSA.jpg?auto=webp&amp;s=8c7321ac00ac506b15b795ff04a0ce5046df0028",
                    "width": 364,
                    "height": 512
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/O4nu_0dDKRGwxKmSnrPFk5iOtSZ0d7QAtT08VLoXGSA.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=cebf7dd5a13af17fea17f7cca49262848d35a5df",
                      "width": 108,
                      "height": 151
                    },
                    {
                      "url": "https://external-preview.redd.it/O4nu_0dDKRGwxKmSnrPFk5iOtSZ0d7QAtT08VLoXGSA.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=1fcc9b56de252c9371d2175831deb6cba8878519",
                      "width": 216,
                      "height": 303
                    },
                    {
                      "url": "https://external-preview.redd.it/O4nu_0dDKRGwxKmSnrPFk5iOtSZ0d7QAtT08VLoXGSA.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=b9697fa7673b94f22c69a388c2499d5a7d973b24",
                      "width": 320,
                      "height": 450
                    }
                  ],
                  "variants": {},
                  "id": "tuY57EFg8-v1LsBoOyW5tpI9JKo2eia3bKCL_EAJMo4"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iosq3k",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "aswethinkweis1",
            "discussion_type": null,
            "num_comments": 2,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iosq3k/snart_på_netflix/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.imgur.com/DXFoMNV.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599568451,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_51b6o",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Kungen öppnar Riksmötet",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 78,
            "top_awarded_type": null,
            "hide_score": true,
            "name": "t3_iosehr",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.74,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 9,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": "c26c0e2c-3893-11e2-ab39-12313b0ce1e2",
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 9,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://a.thumbs.redditmedia.com/_9VIl1JlDDx_MkmUGAqgcLu2-Twt41MOVD4kcB9B0v0.jpg",
            "edited": false,
            "author_flair_css_class": "flag malmoe",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Malmö"
              }
            ],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599595852,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/odhsuiyj0xl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/odhsuiyj0xl51.jpg?auto=webp&amp;s=a5cc5b1a39c5960aad079a90a0a693f34be5abb3",
                    "width": 1911,
                    "height": 1071
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/odhsuiyj0xl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=37ea7950b5b45be9d557453bf613dfbe1bcf36e8",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://preview.redd.it/odhsuiyj0xl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=27cfb5dcc356a0f4ffc61692f902b2a4e07a8827",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://preview.redd.it/odhsuiyj0xl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=958030a30e5a67866f5b439abd374b09a6cea8c5",
                      "width": 320,
                      "height": 179
                    },
                    {
                      "url": "https://preview.redd.it/odhsuiyj0xl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=a1cb2301454f5e8eb37ba8c7c2874f4fa40aadb7",
                      "width": 640,
                      "height": 358
                    },
                    {
                      "url": "https://preview.redd.it/odhsuiyj0xl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=96a1c20b00a2b108398d5a3a637ecb2b250b822d",
                      "width": 960,
                      "height": 538
                    },
                    {
                      "url": "https://preview.redd.it/odhsuiyj0xl51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=81812930c79b131d6e0eba010689b5d5b9cc6b11",
                      "width": 1080,
                      "height": 605
                    }
                  ],
                  "variants": {},
                  "id": "mFz9WamfIS-8Z6UbnACcjSHmlkX2vc-s2-zLcCQuEHA"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Malmö",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iosehr",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "mjolle",
            "discussion_type": null,
            "num_comments": 5,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/iosehr/kungen_öppnar_riksmötet/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/odhsuiyj0xl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599567052,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_2a3jkz9w",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Hittad i Schweiz :/",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_ioqczx",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.76,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 14,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 14,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/D7oRO6Xck_sti_exuNsB_AlScdl1KL3SGh6o3jGMTMc.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599585111,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/9xpt0sam4wl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/9xpt0sam4wl51.jpg?auto=webp&amp;s=b53e48c82277fce2dbd3a5f09312b4bb1147daf6",
                    "width": 3024,
                    "height": 4032
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/9xpt0sam4wl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=333bd20270d19dcb81ac110d1efa0ff9cdf23952",
                      "width": 108,
                      "height": 144
                    },
                    {
                      "url": "https://preview.redd.it/9xpt0sam4wl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=99152a514e6fce5a7ff2d1a981b40af6aebad92d",
                      "width": 216,
                      "height": 288
                    },
                    {
                      "url": "https://preview.redd.it/9xpt0sam4wl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d0315f70e9ff6b8fb7d5fbaebdc819045605de9b",
                      "width": 320,
                      "height": 426
                    },
                    {
                      "url": "https://preview.redd.it/9xpt0sam4wl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=4ab0a3f45424e27144a1531bb84530f3c2f1296c",
                      "width": 640,
                      "height": 853
                    },
                    {
                      "url": "https://preview.redd.it/9xpt0sam4wl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=c86c61e500b3ede72fea3fe335d083ddc471e830",
                      "width": 960,
                      "height": 1280
                    },
                    {
                      "url": "https://preview.redd.it/9xpt0sam4wl51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=f8ded2981545dcd852b3a7b91c83d7068e5a13ba",
                      "width": 1080,
                      "height": 1440
                    }
                  ],
                  "variants": {},
                  "id": "RGHJet5-Q8bsXh1ywZnkAF7aitXa_p_wMo0ZZxXUW_w"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "ioqczx",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Sicarius_13",
            "discussion_type": null,
            "num_comments": 21,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/ioqczx/hittad_i_schweiz/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/9xpt0sam4wl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599556311,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_30of6ulo",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Jag har byggt en semiskala - Storebro 31 Baltic (Från filmen Göta kanal 1)",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 105,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_ioen4d",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.97,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 187,
            "total_awards_received": 2,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 187,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/D61-3PatEcgp5QVjUWySWTYVBsluaP9X5W-HsBqhS4M.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599537049,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/uax5eawp5sl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/uax5eawp5sl51.jpg?auto=webp&amp;s=77b80a6ed0ad8b8e41a1ffdee5af2c8b2cac9f01",
                    "width": 4032,
                    "height": 3024
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/uax5eawp5sl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=a68e307b463e14e5e0849a1cc3a0f09b981034bf",
                      "width": 108,
                      "height": 81
                    },
                    {
                      "url": "https://preview.redd.it/uax5eawp5sl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=d43e5ea671132ee7f48704d2b7964128c3c4984d",
                      "width": 216,
                      "height": 162
                    },
                    {
                      "url": "https://preview.redd.it/uax5eawp5sl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=28c7d985a74475599bf92b221cccc20459ee4419",
                      "width": 320,
                      "height": 240
                    },
                    {
                      "url": "https://preview.redd.it/uax5eawp5sl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=9734c0876db08bf300268c2321d7aa24c92cf6a4",
                      "width": 640,
                      "height": 480
                    },
                    {
                      "url": "https://preview.redd.it/uax5eawp5sl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=17a72a5b4f69daca9b8d0054ed3b9d5aca8bad73",
                      "width": 960,
                      "height": 720
                    },
                    {
                      "url": "https://preview.redd.it/uax5eawp5sl51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=0f86e8a6378eee95c2694694003a2a051f0696fc",
                      "width": 1080,
                      "height": 810
                    }
                  ],
                  "variants": {},
                  "id": "gKGMJmwgw04dfRUZmbH9ndYX61M9zSzz0LznvQfS-FQ"
                }
              ],
              "enabled": true
            },
            "all_awardings": [
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 125,
                "resized_tier_icons": null,
                "id": "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "When you come across a feel-good thing.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Wholesome",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 30,
                "resized_tier_icons": null,
                "id": "award_80d4d339-95d0-43ac-b051-bc3fe0a9bab8",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=16&amp;height=16&amp;auto=webp&amp;s=b1a8234a0a122785991d6e6f8a4e0342525196fb",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=32&amp;height=32&amp;auto=webp&amp;s=d18080390a3a15888b1fb45f6310b0362e97d1c9",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=48&amp;height=48&amp;auto=webp&amp;s=d19c39d1fcfc71fe7f4eb2ba1a52d18d8f063b6e",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=64&amp;height=64&amp;auto=webp&amp;s=d4bdebbc07f33dcb808bcdd14ca3a0095719bb13",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=128&amp;height=128&amp;auto=webp&amp;s=c569e8342e4e2c9c8fb9f4afab3b8e51a9fe3b2a",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Keep the community and yourself healthy and happy.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Wearing is Caring",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=16&amp;height=16&amp;auto=webp&amp;s=b1a8234a0a122785991d6e6f8a4e0342525196fb",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=32&amp;height=32&amp;auto=webp&amp;s=d18080390a3a15888b1fb45f6310b0362e97d1c9",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=48&amp;height=48&amp;auto=webp&amp;s=d19c39d1fcfc71fe7f4eb2ba1a52d18d8f063b6e",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=64&amp;height=64&amp;auto=webp&amp;s=d4bdebbc07f33dcb808bcdd14ca3a0095719bb13",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png?width=128&amp;height=128&amp;auto=webp&amp;s=c569e8342e4e2c9c8fb9f4afab3b8e51a9fe3b2a",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/lcswc5d07hb51_WearingisCaring.png"
              }
            ],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "ioen4d",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Lill-limpan",
            "discussion_type": null,
            "num_comments": 16,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/ioen4d/jag_har_byggt_en_semiskala_storebro_31_baltic/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/uax5eawp5sl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599508249,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "Hej! Kom och hjälp mig!   \nSå kan man väl sammanfatta diverse länders försök till logistik under andra världskriget. Sovjet hade ju för sig bra produktion av stridsvagnar, men hade inte planerat för de tre lastbilar bränsle, ammunition, förnödenheter för besättningen och så vidare som behövdes för att faktiskt driva varje stridsvagn och dess besättning.  \nTyskarna var inte särskilt mycket bättre, med tanke på dess brist på vinteruniformer trots att de tänkt strida i Ryssland på vintern.  \nNog svamlat, hoppas logistiken för kvällens eldgivningsmoment går bättre.  \n  \n  \nVeckans [sponsorvideo](https://www.youtube.com/watch?v=cT_rPy_DWiM) presenteras av /u/vonadler, med stöd av /u/hevosenliha.  \nTagga för Tank-tisdag, den tjugonde i ordningen.\n\nMumbleserver:\n\nmumble://tf.hest.se\n\nWar thunder server: Det varierar, kom in på mumble så löser det sig.\n\nSom vanligt är tiden 19.00.\n\nFFFF (Förbannat Frekvent Frågade Frågor) som inte är low F-ort\n\nF: Vad är War thunder?\n\nS: War Thunder är ett strategi (i någon mening) spel fokuserat på mekaniserad krigsföring som är gratis på Steam. Man åker runt i stridsvagnar eller vad man nu vill framföra och spränger andra personers fordon tills de exploderar.\n\nF: Vad är Mumble?\n\nS: Det är ett röstchatprogram, även kallat TMToIP-program(Taskig MikrofonTeknik over IP), som t. ex. Ventrilo eller Teamspeak, där svordomar, förolämpningar, glada tillrop, konstiga politiska åsikter och smaklösa skämt står som spön i backen.\n\nF: Måste man vara med på Mumble för att få spela?\n\nS: Nej, det måste man inte. Man har dock roligare om man är med på Mumble, även om man inte har någon mikrofon (eller dålig mikrofonteknik som /u/Isterpenis.)\n\nF: Hur länge håller det på?\n\nS: Ett tag, sluta skriva \"Det var ingen som spelade :*(\" om du kommer in klockan halv fyra på natten. FÖR HELVETE\n\nF: Är War Thunder svårt?\n\nS: Nej, det är så lätt att t.o.m. jag kan spela det.\n\nF: [LÅTTEXT HÄR, FAST DET KOSTAR]\n\nS: [BUDGETEN FÖR TANK-TISDAGSPOSTERNA TOG SLUT, JAG FÅR INTE LÄNKA NÅGRA FLER LÅTAR]\n\nF: Hur framför jag en stridsvagn?\n\nS: Håll in W, när du ser en annan vagn med röd rektangel ovanför den, titta på den tills du ser ett grönt kors över den, tryck sedan på vänster musknapp. Upprepa tills fienden exploderar.\n\nF: Man kan ju bara vara 4 i en squad?\n\nS: Ja, men sätter man sig på samma BR (vi brukar köra 1.3 så alla kan vara med) och startar samtidigt är det hög chans att man hamnar i samma strid trots att man har flera olika squads. När vi körde hamnade vi med 2 squads i samma strid 5/6 gånger.\n\nF: Kan vi inte köra egen strid istället, då undviks ju det problemet?\n\nS: Jo, det kan vi, men då går man ju miste om utvecklingspoäng och valuta att forska fram och köpa nya modifikationer och vagnar för.\n\nF: Men jag är ju noob?\n\nS: Vi kör den battle rating som passar gruppen bäst. 1.3 innebär att även noobs har stridsvagnar och veteranerna har något hyfsat som de forskat uppgraderingar på. Det är jämnt nog för att spela.\n\nF: Varför använder ni Mumble? Använd Discord istället; det distribuerar ju lösenord, chatt och talade ord till okänd part via CloudFlare!\n\nS: För att /u/rovanion bokstavligen är Norci och hatar frihet, skoj, glädje, kärlek och alla andra saker som inte har öppen källkod. Skämt åsido så är Mumble open source, och den enda nätverkstrafiken är den som går mellan användarna och Rovanions server. Eftersom Discord inte har öppen källkod så kan det vara så att det man säger skickas till NSA, FRA, HIV eller kanske ICA. tf.hest.se - med integritet i fokus.\n\nF: Vem fan är stefn?",
            "author_fullname": "t2_8k1go",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Tank-tisdag XX - Den med fruktansvärt usel logistik",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": null,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_ionyin",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.79,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 20,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": null,
            "author_flair_template_id": "90df7004-3895-11e2-9259-12313d051e91",
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 20,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "self",
            "edited": false,
            "author_flair_css_class": "flag landskap-uppland",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Uppland"
              }
            ],
            "gildings": {},
            "post_hint": "self",
            "content_categories": null,
            "is_self": true,
            "mod_note": null,
            "created": 1599571956,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "self.sweden",
            "allow_live_comments": false,
            "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Hej! Kom och hjälp mig!&lt;br/&gt;\nSå kan man väl sammanfatta diverse länders försök till logistik under andra världskriget. Sovjet hade ju för sig bra produktion av stridsvagnar, men hade inte planerat för de tre lastbilar bränsle, ammunition, förnödenheter för besättningen och så vidare som behövdes för att faktiskt driva varje stridsvagn och dess besättning.&lt;br/&gt;\nTyskarna var inte särskilt mycket bättre, med tanke på dess brist på vinteruniformer trots att de tänkt strida i Ryssland på vintern.&lt;br/&gt;\nNog svamlat, hoppas logistiken för kvällens eldgivningsmoment går bättre.  &lt;/p&gt;\n\n&lt;p&gt;Veckans &lt;a href=\"https://www.youtube.com/watch?v=cT_rPy_DWiM\"&gt;sponsorvideo&lt;/a&gt; presenteras av &lt;a href=\"/u/vonadler\"&gt;/u/vonadler&lt;/a&gt;, med stöd av &lt;a href=\"/u/hevosenliha\"&gt;/u/hevosenliha&lt;/a&gt;.&lt;br/&gt;\nTagga för Tank-tisdag, den tjugonde i ordningen.&lt;/p&gt;\n\n&lt;p&gt;Mumbleserver:&lt;/p&gt;\n\n&lt;p&gt;&lt;a href=\"mumble://tf.hest.se\"&gt;mumble://tf.hest.se&lt;/a&gt;&lt;/p&gt;\n\n&lt;p&gt;War thunder server: Det varierar, kom in på mumble så löser det sig.&lt;/p&gt;\n\n&lt;p&gt;Som vanligt är tiden 19.00.&lt;/p&gt;\n\n&lt;p&gt;FFFF (Förbannat Frekvent Frågade Frågor) som inte är low F-ort&lt;/p&gt;\n\n&lt;p&gt;F: Vad är War thunder?&lt;/p&gt;\n\n&lt;p&gt;S: War Thunder är ett strategi (i någon mening) spel fokuserat på mekaniserad krigsföring som är gratis på Steam. Man åker runt i stridsvagnar eller vad man nu vill framföra och spränger andra personers fordon tills de exploderar.&lt;/p&gt;\n\n&lt;p&gt;F: Vad är Mumble?&lt;/p&gt;\n\n&lt;p&gt;S: Det är ett röstchatprogram, även kallat TMToIP-program(Taskig MikrofonTeknik over IP), som t. ex. Ventrilo eller Teamspeak, där svordomar, förolämpningar, glada tillrop, konstiga politiska åsikter och smaklösa skämt står som spön i backen.&lt;/p&gt;\n\n&lt;p&gt;F: Måste man vara med på Mumble för att få spela?&lt;/p&gt;\n\n&lt;p&gt;S: Nej, det måste man inte. Man har dock roligare om man är med på Mumble, även om man inte har någon mikrofon (eller dålig mikrofonteknik som &lt;a href=\"/u/Isterpenis\"&gt;/u/Isterpenis&lt;/a&gt;.)&lt;/p&gt;\n\n&lt;p&gt;F: Hur länge håller det på?&lt;/p&gt;\n\n&lt;p&gt;S: Ett tag, sluta skriva &amp;quot;Det var ingen som spelade :*(&amp;quot; om du kommer in klockan halv fyra på natten. FÖR HELVETE&lt;/p&gt;\n\n&lt;p&gt;F: Är War Thunder svårt?&lt;/p&gt;\n\n&lt;p&gt;S: Nej, det är så lätt att t.o.m. jag kan spela det.&lt;/p&gt;\n\n&lt;p&gt;F: [LÅTTEXT HÄR, FAST DET KOSTAR]&lt;/p&gt;\n\n&lt;p&gt;S: [BUDGETEN FÖR TANK-TISDAGSPOSTERNA TOG SLUT, JAG FÅR INTE LÄNKA NÅGRA FLER LÅTAR]&lt;/p&gt;\n\n&lt;p&gt;F: Hur framför jag en stridsvagn?&lt;/p&gt;\n\n&lt;p&gt;S: Håll in W, när du ser en annan vagn med röd rektangel ovanför den, titta på den tills du ser ett grönt kors över den, tryck sedan på vänster musknapp. Upprepa tills fienden exploderar.&lt;/p&gt;\n\n&lt;p&gt;F: Man kan ju bara vara 4 i en squad?&lt;/p&gt;\n\n&lt;p&gt;S: Ja, men sätter man sig på samma BR (vi brukar köra 1.3 så alla kan vara med) och startar samtidigt är det hög chans att man hamnar i samma strid trots att man har flera olika squads. När vi körde hamnade vi med 2 squads i samma strid 5/6 gånger.&lt;/p&gt;\n\n&lt;p&gt;F: Kan vi inte köra egen strid istället, då undviks ju det problemet?&lt;/p&gt;\n\n&lt;p&gt;S: Jo, det kan vi, men då går man ju miste om utvecklingspoäng och valuta att forska fram och köpa nya modifikationer och vagnar för.&lt;/p&gt;\n\n&lt;p&gt;F: Men jag är ju noob?&lt;/p&gt;\n\n&lt;p&gt;S: Vi kör den battle rating som passar gruppen bäst. 1.3 innebär att även noobs har stridsvagnar och veteranerna har något hyfsat som de forskat uppgraderingar på. Det är jämnt nog för att spela.&lt;/p&gt;\n\n&lt;p&gt;F: Varför använder ni Mumble? Använd Discord istället; det distribuerar ju lösenord, chatt och talade ord till okänd part via CloudFlare!&lt;/p&gt;\n\n&lt;p&gt;S: För att &lt;a href=\"/u/rovanion\"&gt;/u/rovanion&lt;/a&gt; bokstavligen är Norci och hatar frihet, skoj, glädje, kärlek och alla andra saker som inte har öppen källkod. Skämt åsido så är Mumble open source, och den enda nätverkstrafiken är den som går mellan användarna och Rovanions server. Eftersom Discord inte har öppen källkod så kan det vara så att det man säger skickas till NSA, FRA, HIV eller kanske ICA. tf.hest.se - med integritet i fokus.&lt;/p&gt;\n\n&lt;p&gt;F: Vem fan är stefn?&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/y3brEcRn7mMPSOphKl7meFL1AuqOYx5WO4jBUDMo0wE.jpg?auto=webp&amp;s=c5fe53a340fe59b76c323045608cc188920975ea",
                    "width": 480,
                    "height": 360
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/y3brEcRn7mMPSOphKl7meFL1AuqOYx5WO4jBUDMo0wE.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=39f7f531206c43002cc9a61a248ca44d9727bf70",
                      "width": 108,
                      "height": 81
                    },
                    {
                      "url": "https://external-preview.redd.it/y3brEcRn7mMPSOphKl7meFL1AuqOYx5WO4jBUDMo0wE.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=3dae1d54cb8bc1a452cc70121fecc8f1386128d8",
                      "width": 216,
                      "height": 162
                    },
                    {
                      "url": "https://external-preview.redd.it/y3brEcRn7mMPSOphKl7meFL1AuqOYx5WO4jBUDMo0wE.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=9a2a51ea9f78ca202066005c026da4390917e1b5",
                      "width": 320,
                      "height": 240
                    }
                  ],
                  "variants": {},
                  "id": "2pTKgKBGZFav5UP36chwx0vzaqyqpdrBj9Ssa5yrmy8"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Uppland",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "ionyin",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Skogsmard",
            "discussion_type": null,
            "num_comments": 10,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/ionyin/tanktisdag_xx_den_med_fruktansvärt_usel_logistik/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://www.reddit.com/r/sweden/comments/ionyin/tanktisdag_xx_den_med_fruktansvärt_usel_logistik/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599543156,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_978d5",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Polisen: Klanerna är systemhotande",
            "link_flair_richtext": [
              {
                "e": "text",
                "t": "Nyhet"
              }
            ],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": "category news",
            "downs": 0,
            "thumbnail_height": 78,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iocfg6",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.88,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 97,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": "Nyhet",
            "can_mod_post": false,
            "score": 97,
            "approved_by": null,
            "author_premium": true,
            "thumbnail": "https://b.thumbs.redditmedia.com/LoZQwR3AhGkuwAayk84ynXRmh_1OUNnuQf48_6uInTE.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "link",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599530299,
            "link_flair_type": "richtext",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "expressen.se",
            "allow_live_comments": true,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://www.expressen.se/nyheter/polisen-klanerna-ar-systemhotande/",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/qXWIZHx6rxkSBUhD7kIm-crDWEPmSqYCL87WyR755uU.jpg?auto=webp&amp;s=c2642a6c6156a198d83eced76a46d9f7ebba37ed",
                    "width": 1920,
                    "height": 1080
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/qXWIZHx6rxkSBUhD7kIm-crDWEPmSqYCL87WyR755uU.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=c517f00111f4659e4a010554e60d38921d18895b",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/qXWIZHx6rxkSBUhD7kIm-crDWEPmSqYCL87WyR755uU.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=cdd4cd05461793960d909b760d86113df431687c",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/qXWIZHx6rxkSBUhD7kIm-crDWEPmSqYCL87WyR755uU.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=91d0b75b78aade810ffce9eaf1de06116fd8bdf2",
                      "width": 320,
                      "height": 180
                    },
                    {
                      "url": "https://external-preview.redd.it/qXWIZHx6rxkSBUhD7kIm-crDWEPmSqYCL87WyR755uU.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=e4982885e0d2229bb5e481717b15625dcadd1971",
                      "width": 640,
                      "height": 360
                    },
                    {
                      "url": "https://external-preview.redd.it/qXWIZHx6rxkSBUhD7kIm-crDWEPmSqYCL87WyR755uU.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=8f5820de03a1ddf31d3244dbfded8d2d859346ee",
                      "width": 960,
                      "height": 540
                    },
                    {
                      "url": "https://external-preview.redd.it/qXWIZHx6rxkSBUhD7kIm-crDWEPmSqYCL87WyR755uU.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=b79b55b317ed8700a16926786bdc6fa911663167",
                      "width": 1080,
                      "height": 607
                    }
                  ],
                  "variants": {},
                  "id": "FU6IjSkuoz1S2LL2uDHsYm6NVbUpowsdgKQJt1xa8GY"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iocfg6",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Silverkuken",
            "discussion_type": null,
            "num_comments": 71,
            "send_replies": false,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iocfg6/polisen_klanerna_är_systemhotande/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://www.expressen.se/nyheter/polisen-klanerna-ar-systemhotande/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599501499,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_74wne",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Tisdagsgrabbarna",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iopkki",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.63,
            "author_flair_background_color": "",
            "subreddit_type": "public",
            "ups": 5,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 5,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://a.thumbs.redditmedia.com/O_PC1-zE5KaFSN535x9TNOyh1MXpSNYST3JfBu4xAC8.jpg",
            "edited": false,
            "author_flair_css_class": "flag dk",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Danmark"
              }
            ],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599580475,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/3rpa9artqvl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/3rpa9artqvl51.jpg?auto=webp&amp;s=17b631ab3e704828e9aeeb3841e81c15d6156d61",
                    "width": 706,
                    "height": 938
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/3rpa9artqvl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=ed77bff94ab7ccda4021031d374e0ce8e743c9fa",
                      "width": 108,
                      "height": 143
                    },
                    {
                      "url": "https://preview.redd.it/3rpa9artqvl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=82088bcc0f2e74f8c1f723e54b3f5ff669070e50",
                      "width": 216,
                      "height": 286
                    },
                    {
                      "url": "https://preview.redd.it/3rpa9artqvl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=570141de516b47f4f61337d778720c90a8ee8453",
                      "width": 320,
                      "height": 425
                    },
                    {
                      "url": "https://preview.redd.it/3rpa9artqvl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=1c6691ee51645e9696159af26aec58633f84396c",
                      "width": 640,
                      "height": 850
                    }
                  ],
                  "variants": {},
                  "id": "yPmWC20HcrHbaWKr-aG3S8Md45pY01QZkBPjt6WZ5H4"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Danmark",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iopkki",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "SweFaidros",
            "discussion_type": null,
            "num_comments": 3,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/iopkki/tisdagsgrabbarna/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/3rpa9artqvl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599551675,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_7b6gww7i",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Idag fyller Söderhamn 400 år! Den 7 september 1620 fick staden sina stadsprivilegier av Gustav II Adolf, med detta undertecknade privilegiebrev. Årets planerade flerdagarsfest fick pandemi-anpassas, till småbarns födelsedagssång och Gripen-plan i formation för att hedra den forna flottiljstaden.",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iodde1",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.96,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 68,
            "total_awards_received": 1,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 68,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/2CfxFXOD6XMwGJa_EGWwSuCnRp0KeW_NwGUoIvKlHZg.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599533170,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/tf9fjno6url51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/tf9fjno6url51.jpg?auto=webp&amp;s=be7bb03f0d0b958e7f052eade0a3acc2158a55b2",
                    "width": 1920,
                    "height": 2744
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/tf9fjno6url51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=b8fbbb52c56a63e22de2b35b2a5170927866c00f",
                      "width": 108,
                      "height": 154
                    },
                    {
                      "url": "https://preview.redd.it/tf9fjno6url51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=b3385f7a468a0a3938b6ae86db42987bb36fb748",
                      "width": 216,
                      "height": 308
                    },
                    {
                      "url": "https://preview.redd.it/tf9fjno6url51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=5049c5f23e54073f5f61c7f514813ef5ff397141",
                      "width": 320,
                      "height": 457
                    },
                    {
                      "url": "https://preview.redd.it/tf9fjno6url51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=dde70250dbd36883ed4e14fe67403f0bcb7d570a",
                      "width": 640,
                      "height": 914
                    },
                    {
                      "url": "https://preview.redd.it/tf9fjno6url51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=74d8a8e97fdccd367654daf9d189dd3816b1a2c3",
                      "width": 960,
                      "height": 1372
                    },
                    {
                      "url": "https://preview.redd.it/tf9fjno6url51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=f0224b39de7e8ff3949a5abeba299693a0abfdd9",
                      "width": 1080,
                      "height": 1543
                    }
                  ],
                  "variants": {},
                  "id": "i3qkE9E4DnAIoOvmTVuEwm-21M3LN7-flrzg5cFfGMI"
                }
              ],
              "enabled": true
            },
            "all_awardings": [
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 125,
                "resized_tier_icons": null,
                "id": "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "When you come across a feel-good thing.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Wholesome",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
              }
            ],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iodde1",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "SCHJOO",
            "discussion_type": null,
            "num_comments": 3,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iodde1/idag_fyller_söderhamn_400_år_den_7_september_1620/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/tf9fjno6url51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599504370,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_sgwdfa",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "med vem?",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_io545f",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.91,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 295,
            "total_awards_received": 2,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": "b3a39f8e-30e3-11e2-acce-12313b0ce1e2",
            "is_original_content": false,
            "user_reports": [],
            "secure_media": {
              "reddit_video": {
                "fallback_url": "https://v.redd.it/loj10nfodpl51/DASH_240.mp4?source=fallback",
                "height": 240,
                "width": 240,
                "scrubber_media_url": "https://v.redd.it/loj10nfodpl51/DASH_96.mp4",
                "dash_url": "https://v.redd.it/loj10nfodpl51/DASHPlaylist.mpd?a=1602164080%2CM2NlZjU4NmZjNGEwYTI3MzVkN2U3NzU3NWI3ZTE0YTNmYzMzNjBkNGFhOGU1NGJiNDAwYzBhNGFiMjE5YTNlYw%3D%3D&amp;v=1&amp;f=sd",
                "duration": 5,
                "hls_url": "https://v.redd.it/loj10nfodpl51/HLSPlaylist.m3u8?a=1602164080%2CNGE0YWI4ZWYxOTU5YjQ4NjJlZGY2MzgyOTk1MmNkMTk2MTBhNThhNDlkNDljNWM5NDFiMTg2Yzc3NDI4Yjg0Nw%3D%3D&amp;v=1&amp;f=sd",
                "is_gif": false,
                "transcoding_status": "completed"
              }
            },
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 295,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/NnvbxM0_aTQxYwWdVqMU9AE0wLZ1e0O-xY4HURng27I.jpg",
            "edited": false,
            "author_flair_css_class": "flag stockholm",
            "author_flair_richtext": [
              {
                "e": "text",
                "t": "Stockholm"
              }
            ],
            "gildings": {},
            "post_hint": "hosted:video",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599503517,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "richtext",
            "domain": "v.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://v.redd.it/loj10nfodpl51",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/z1Dr85um1tV8FoqU_FPvaaw8tquT6x5wawAU1FHjqng.png?format=pjpg&amp;auto=webp&amp;s=1e397c51942c48615375695aa6aed3d2b87f2676",
                    "width": 240,
                    "height": 240
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/z1Dr85um1tV8FoqU_FPvaaw8tquT6x5wawAU1FHjqng.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=c2af057875ff16741b71595e6dae1bfe7c413926",
                      "width": 108,
                      "height": 108
                    },
                    {
                      "url": "https://external-preview.redd.it/z1Dr85um1tV8FoqU_FPvaaw8tquT6x5wawAU1FHjqng.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=716af261747853f54175404468ed02277a972356",
                      "width": 216,
                      "height": 216
                    }
                  ],
                  "variants": {},
                  "id": "hZ_Drebe26vlTNnUyhwztSpw7moBJ5AYSzuKOHKItKI"
                }
              ],
              "enabled": false
            },
            "all_awardings": [
              {
                "giver_coin_reward": null,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 150,
                "resized_tier_icons": null,
                "id": "award_77ba55a2-c33c-4351-ac49-807455a80148",
                "penny_donate": null,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "Prayers up for the blessed.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Bless Up",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=16&amp;height=16&amp;auto=webp&amp;s=7a2f2b927be72d2b46ebd95bab8c072c3be0fbab",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=32&amp;height=32&amp;auto=webp&amp;s=6e42b7095bcc331e53202438613aa827addf70c3",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=48&amp;height=48&amp;auto=webp&amp;s=c740f7ef642fd2042d62c2bcba98734d08dfae6c",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=64&amp;height=64&amp;auto=webp&amp;s=74e630f1072bb2423034ae48aefa241d834d7186",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png?width=128&amp;height=128&amp;auto=webp&amp;s=0a89cd8011c8210315ee60441eefd77b973a0c82",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": null,
                "icon_height": 2048,
                "penny_price": null,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/trfv6ems1md41_BlessUp.png"
              },
              {
                "giver_coin_reward": 0,
                "subreddit_id": null,
                "is_new": false,
                "days_of_drip_extension": 0,
                "coin_price": 50,
                "resized_tier_icons": null,
                "id": "award_02d9ab2c-162e-4c01-8438-317a016ed3d9",
                "penny_donate": 0,
                "award_sub_type": "GLOBAL",
                "coin_reward": 0,
                "icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png",
                "days_of_premium": 0,
                "tiers_by_required_awardings": null,
                "resized_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_width": 2048,
                "static_icon_width": 2048,
                "start_date": null,
                "is_enabled": true,
                "awardings_required_to_grant_benefits": null,
                "description": "I'm in this with you.",
                "end_date": null,
                "subreddit_coin_reward": 0,
                "count": 1,
                "static_icon_height": 2048,
                "name": "Take My Energy",
                "resized_static_icons": [
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=92e96be1dbd278dc987fbd9acc1bd5078566f254",
                    "width": 16,
                    "height": 16
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=83e14655f2b162b295f7d2c7058b9ad94cf8b73c",
                    "width": 32,
                    "height": 32
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=83038a4d6181d3c8f5107dbca4ddb735ca6c2231",
                    "width": 48,
                    "height": 48
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=3c4e39a7664d799ff50f32e9a3f96c3109d2e266",
                    "width": 64,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=390bf9706b8e1a6215716ebcf6363373f125c339",
                    "width": 128,
                    "height": 128
                  }
                ],
                "icon_format": "PNG",
                "icon_height": 2048,
                "penny_price": 0,
                "award_type": "global",
                "static_icon_url": "https://i.redd.it/award_images/t5_22cerq/898sygoknoo41_TakeMyEnergy.png"
              }
            ],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": "Stockholm",
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "io545f",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Str1_",
            "discussion_type": null,
            "num_comments": 18,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": "dark",
            "permalink": "/r/sweden/comments/io545f/med_vem/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://v.redd.it/loj10nfodpl51",
            "subreddit_subscribers": 305685,
            "created_utc": 1599474717,
            "num_crossposts": 0,
            "media": {
              "reddit_video": {
                "fallback_url": "https://v.redd.it/loj10nfodpl51/DASH_240.mp4?source=fallback",
                "height": 240,
                "width": 240,
                "scrubber_media_url": "https://v.redd.it/loj10nfodpl51/DASH_96.mp4",
                "dash_url": "https://v.redd.it/loj10nfodpl51/DASHPlaylist.mpd?a=1602164080%2CM2NlZjU4NmZjNGEwYTI3MzVkN2U3NzU3NWI3ZTE0YTNmYzMzNjBkNGFhOGU1NGJiNDAwYzBhNGFiMjE5YTNlYw%3D%3D&amp;v=1&amp;f=sd",
                "duration": 5,
                "hls_url": "https://v.redd.it/loj10nfodpl51/HLSPlaylist.m3u8?a=1602164080%2CNGE0YWI4ZWYxOTU5YjQ4NjJlZGY2MzgyOTk1MmNkMTk2MTBhNThhNDlkNDljNWM5NDFiMTg2Yzc3NDI4Yjg0Nw%3D%3D&amp;v=1&amp;f=sd",
                "is_gif": false,
                "transcoding_status": "completed"
              }
            },
            "is_video": true
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_ht8ijur",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Aktuellt i SVT2. Annie lööf får frågan vilken youtuber hon helst tittar på",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_ioe96s",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.83,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 46,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 46,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://a.thumbs.redditmedia.com/MK8WSUGw9efiNplPYGhI0z3NyL7FWt713Ipf5ZDCJ98.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599535880,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/7qebb3t82sl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/7qebb3t82sl51.jpg?auto=webp&amp;s=c8ad55ada8fffc0cb35a56ed249a89807b0de35c",
                    "width": 960,
                    "height": 1931
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/7qebb3t82sl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=5fefa05e023a2c3557f0deaa1e72032e9c26eb5d",
                      "width": 108,
                      "height": 216
                    },
                    {
                      "url": "https://preview.redd.it/7qebb3t82sl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=91964264b2c011e53294ddd0bdd2faebae13f7eb",
                      "width": 216,
                      "height": 432
                    },
                    {
                      "url": "https://preview.redd.it/7qebb3t82sl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=73dcbf4aef84d18fc279957ad2464c726b23899b",
                      "width": 320,
                      "height": 640
                    },
                    {
                      "url": "https://preview.redd.it/7qebb3t82sl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=0ad973ffd5df7a9f217f42f88ddd1d847b4ed40b",
                      "width": 640,
                      "height": 1280
                    },
                    {
                      "url": "https://preview.redd.it/7qebb3t82sl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=babe2e996b63ccad9699c059b88e4e95c9517f5e",
                      "width": 960,
                      "height": 1920
                    }
                  ],
                  "variants": {},
                  "id": "ROStXpNCvXFGvYa3ynEn-syum7aLIQfPh9cy9rY52yU"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "ioe96s",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Olf_yee",
            "discussion_type": null,
            "num_comments": 45,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/ioe96s/aktuellt_i_svt2_annie_lööf_får_frågan_vilken/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/7qebb3t82sl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599507080,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_48t31t0b",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Kvinna i 60-årsåldern anhållen för upploppen i Malmö",
            "link_flair_richtext": [
              {
                "e": "text",
                "t": "Nyhet"
              }
            ],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": "category news",
            "downs": 0,
            "thumbnail_height": 78,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iocb4d",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.88,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 57,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": "Nyhet",
            "can_mod_post": false,
            "score": 57,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/ASJkiAqTs5T8mfCP6tuXbI3405b6g7k8AmM5Xmp26Rw.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "link",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599529929,
            "link_flair_type": "richtext",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "expressen.se",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://www.expressen.se/kvallsposten/just-nu-kvinna-i-60-arsaldern-anhallen-for-upploppen/",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/LekBEvHscAiTj4JDwqBqkzBL6_3ZH3GgXuK4LLJ1gnM.jpg?auto=webp&amp;s=b8d5656b51c4ea6b7c838f8ed6f14e6377d1c4ec",
                    "width": 1706,
                    "height": 961
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/LekBEvHscAiTj4JDwqBqkzBL6_3ZH3GgXuK4LLJ1gnM.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=26d531cffdd0a00416b3811d2a7ff99937c43b3c",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/LekBEvHscAiTj4JDwqBqkzBL6_3ZH3GgXuK4LLJ1gnM.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=c6090d58eae9e93b3d972220776371f53c185dbf",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/LekBEvHscAiTj4JDwqBqkzBL6_3ZH3GgXuK4LLJ1gnM.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=1a0fc240f691dabc1f3494af5f6277792a5aa7a0",
                      "width": 320,
                      "height": 180
                    },
                    {
                      "url": "https://external-preview.redd.it/LekBEvHscAiTj4JDwqBqkzBL6_3ZH3GgXuK4LLJ1gnM.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=b1e991b81862ec482bf34d365d55e33da3ffd6c8",
                      "width": 640,
                      "height": 360
                    },
                    {
                      "url": "https://external-preview.redd.it/LekBEvHscAiTj4JDwqBqkzBL6_3ZH3GgXuK4LLJ1gnM.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=b376c8728a7a4aac66b13a9589546985c5687f0d",
                      "width": 960,
                      "height": 540
                    },
                    {
                      "url": "https://external-preview.redd.it/LekBEvHscAiTj4JDwqBqkzBL6_3ZH3GgXuK4LLJ1gnM.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=0e965d005425c06f3414b22175bae192560c92bf",
                      "width": 1080,
                      "height": 608
                    }
                  ],
                  "variants": {},
                  "id": "2Z2oEi-_py_y-zRlFtb1SQGgYcW10ipHOJICycvQtvQ"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iocb4d",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "axfreps",
            "discussion_type": null,
            "num_comments": 25,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iocb4d/kvinna_i_60årsåldern_anhållen_för_upploppen_i/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://www.expressen.se/kvallsposten/just-nu-kvinna-i-60-arsaldern-anhallen-for-upploppen/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599501129,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_978d5",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Löfven: ”Jag vill inte koppla brottsligheten till etnicitet”",
            "link_flair_richtext": [
              {
                "e": "text",
                "t": "Nyhet"
              }
            ],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": "category news",
            "downs": 0,
            "thumbnail_height": 78,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_ioagne",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.78,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 69,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": "Nyhet",
            "can_mod_post": false,
            "score": 69,
            "approved_by": null,
            "author_premium": true,
            "thumbnail": "https://b.thumbs.redditmedia.com/5FN1wtDXN7Gq4G4wz1RV3Hlb3VmZfLvvH5XWmd02IOo.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "link",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599524346,
            "link_flair_type": "richtext",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "dn.se",
            "allow_live_comments": true,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://www.dn.se/sverige/lofven-jag-vill-inte-koppla-brottsligheten-till-etnicitet/",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/Upf9RVg6zQEImdps5XMAL2EK9BK7vbjmTmsVlPSKGaQ.jpg?auto=webp&amp;s=90996e28910553a1cb442a62afec20ef8ff21db7",
                    "width": 1024,
                    "height": 576
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/Upf9RVg6zQEImdps5XMAL2EK9BK7vbjmTmsVlPSKGaQ.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=8abb3482fad93c326eb30878b27ca13b2afb9ee0",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/Upf9RVg6zQEImdps5XMAL2EK9BK7vbjmTmsVlPSKGaQ.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=2af654b858bf0769bffa89518e13d51c0e444eba",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/Upf9RVg6zQEImdps5XMAL2EK9BK7vbjmTmsVlPSKGaQ.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=86fb440d9e53ab30988a736215c2082115255d19",
                      "width": 320,
                      "height": 180
                    },
                    {
                      "url": "https://external-preview.redd.it/Upf9RVg6zQEImdps5XMAL2EK9BK7vbjmTmsVlPSKGaQ.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=7954e6b99fdc5a0ecd27daa18c8928b1596d5c62",
                      "width": 640,
                      "height": 360
                    },
                    {
                      "url": "https://external-preview.redd.it/Upf9RVg6zQEImdps5XMAL2EK9BK7vbjmTmsVlPSKGaQ.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=356d56a16eff332aae30105463e06b4f50b9f830",
                      "width": 960,
                      "height": 540
                    }
                  ],
                  "variants": {},
                  "id": "u6xUd2nLQK5EhAMk_25cYvn0w_kf-fRq-P3cLM360ao"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "ioagne",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Silverkuken",
            "discussion_type": null,
            "num_comments": 106,
            "send_replies": false,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/ioagne/löfven_jag_vill_inte_koppla_brottsligheten_till/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://www.dn.se/sverige/lofven-jag-vill-inte-koppla-brottsligheten-till-etnicitet/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599495546,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "Hello! \nI used to work at a restaurant under a Swede in 2006ish. She would have me cook recipes from thick cloth bound book. I refereed to it as \"the Swedish joy of cooking.\" It had all the basic Swedish dishes in it and I specifically remember using the book to make princess cake and carrot casserole. Basic text inside. It was an older book without pictures. \nI'd really like to find a copy of that book, but I have no idea what it was called and I don't know Swedish (at the time I could just read baking directions). Any ideas what it could be? Thanks!",
            "author_fullname": "t2_34ioedku",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "I'm looking for an old Swedish cookbook title",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": null,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iojxb0",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.76,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 11,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": null,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 11,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "self",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "content_categories": null,
            "is_self": true,
            "mod_note": null,
            "created": 1599555223,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "self.sweden",
            "allow_live_comments": false,
            "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Hello! \nI used to work at a restaurant under a Swede in 2006ish. She would have me cook recipes from thick cloth bound book. I refereed to it as &amp;quot;the Swedish joy of cooking.&amp;quot; It had all the basic Swedish dishes in it and I specifically remember using the book to make princess cake and carrot casserole. Basic text inside. It was an older book without pictures. \nI&amp;#39;d really like to find a copy of that book, but I have no idea what it was called and I don&amp;#39;t know Swedish (at the time I could just read baking directions). Any ideas what it could be? Thanks!&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "view_count": null,
            "archived": false,
            "no_follow": true,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iojxb0",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "cheeryhazzledazzle",
            "discussion_type": null,
            "num_comments": 5,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iojxb0/im_looking_for_an_old_swedish_cookbook_title/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://www.reddit.com/r/sweden/comments/iojxb0/im_looking_for_an_old_swedish_cookbook_title/",
            "subreddit_subscribers": 305685,
            "created_utc": 1599526423,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_kqjzr",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Tack, men detta är lite mer information än jag önskar. Och dessutom vilka tänkte hon skulle vara mottagarna?",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 140,
            "top_awarded_type": null,
            "hide_score": false,
            "name": "t3_iodshy",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.82,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 27,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": true,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 27,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/977GJgpq1AvPx2xV-msTwyyAINSiYKEFSazL3S-JGGI.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "image",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599534459,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "i.redd.it",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://i.redd.it/wfectbp0yrl51.jpg",
            "view_count": null,
            "archived": false,
            "no_follow": false,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://preview.redd.it/wfectbp0yrl51.jpg?auto=webp&amp;s=6c138cc69de6dd498f5c75aa46bae72e1122ba6a",
                    "width": 1125,
                    "height": 2436
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/wfectbp0yrl51.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=b60cabc6a7c7d01a30d55b1196c09c95ed356546",
                      "width": 108,
                      "height": 216
                    },
                    {
                      "url": "https://preview.redd.it/wfectbp0yrl51.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=908e563933c7d9b3e410ec0c41dee0210ca0708a",
                      "width": 216,
                      "height": 432
                    },
                    {
                      "url": "https://preview.redd.it/wfectbp0yrl51.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=ee0489e781be3d20cba73505c73354dbd97556ac",
                      "width": 320,
                      "height": 640
                    },
                    {
                      "url": "https://preview.redd.it/wfectbp0yrl51.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=865f43ba5126d63d29bc05d2f436b64d0dbec6f1",
                      "width": 640,
                      "height": 1280
                    },
                    {
                      "url": "https://preview.redd.it/wfectbp0yrl51.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=0057bc24d2cbec7f5569d3883817d71ab874cb34",
                      "width": 960,
                      "height": 1920
                    },
                    {
                      "url": "https://preview.redd.it/wfectbp0yrl51.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=ffe977dd8e94dd8b0ae1f4705f1b5922d34a766b",
                      "width": 1080,
                      "height": 2160
                    }
                  ],
                  "variants": {},
                  "id": "n2PqYJ1rxMYBr3s4rBMJ9tXe_XDkSU2rlRs9SM3QxoI"
                }
              ],
              "enabled": true
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iodshy",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Hindlur",
            "discussion_type": null,
            "num_comments": 5,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iodshy/tack_men_detta_är_lite_mer_information_än_jag/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://i.redd.it/wfectbp0yrl51.jpg",
            "subreddit_subscribers": 305685,
            "created_utc": 1599505659,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        },
        {
          "kind": "t3",
          "data": {
            "approved_at_utc": null,
            "subreddit": "sweden",
            "selftext": "",
            "author_fullname": "t2_5bvm9",
            "saved": false,
            "mod_reason_title": null,
            "gilded": 0,
            "clicked": false,
            "title": "Hur demokratier dör - Vad säger forskningen?",
            "link_flair_richtext": [],
            "subreddit_name_prefixed": "r/sweden",
            "hidden": false,
            "pwls": 6,
            "link_flair_css_class": null,
            "downs": 0,
            "thumbnail_height": 91,
            "top_awarded_type": null,
            "hide_score": true,
            "name": "t3_iorzl6",
            "quarantine": false,
            "link_flair_text_color": "dark",
            "upvote_ratio": 0.47,
            "author_flair_background_color": null,
            "subreddit_type": "public",
            "ups": 0,
            "total_awards_received": 0,
            "media_embed": {},
            "thumbnail_width": 140,
            "author_flair_template_id": null,
            "is_original_content": false,
            "user_reports": [],
            "secure_media": null,
            "is_reddit_media_domain": false,
            "is_meta": false,
            "category": null,
            "secure_media_embed": {},
            "link_flair_text": null,
            "can_mod_post": false,
            "score": 0,
            "approved_by": null,
            "author_premium": false,
            "thumbnail": "https://b.thumbs.redditmedia.com/NY8uVNs9g9NLQmpXL4uMH5xsCOt_ElfSvtRxpZif3Lg.jpg",
            "edited": false,
            "author_flair_css_class": null,
            "author_flair_richtext": [],
            "gildings": {},
            "post_hint": "link",
            "content_categories": null,
            "is_self": false,
            "mod_note": null,
            "created": 1599593914,
            "link_flair_type": "text",
            "wls": 6,
            "removed_by_category": null,
            "banned_by": null,
            "author_flair_type": "text",
            "domain": "expo.se",
            "allow_live_comments": false,
            "selftext_html": null,
            "likes": null,
            "suggested_sort": null,
            "banned_at_utc": null,
            "url_overridden_by_dest": "https://expo.se/2020/03/hur-demokratier-d%C3%B6r?fbclid=IwAR07bfrAnpQTlnqljBUkbftxBwKdFr59A_bgYfd4GsVvkrhwtkfRtlsYrEY",
            "view_count": null,
            "archived": false,
            "no_follow": true,
            "is_crosspostable": false,
            "pinned": false,
            "over_18": false,
            "preview": {
              "images": [
                {
                  "source": {
                    "url": "https://external-preview.redd.it/vBv-okyrg49DSIVthQaBT23Ru3QqmKPQXYKzfQD9KsA.jpg?auto=webp&amp;s=0ae8be0e7e38624016a4c57369d000797c9fdb96",
                    "width": 1040,
                    "height": 683
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/vBv-okyrg49DSIVthQaBT23Ru3QqmKPQXYKzfQD9KsA.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=65c039f9b24b91ecae22b7eee18d4be3fdb5f79c",
                      "width": 108,
                      "height": 70
                    },
                    {
                      "url": "https://external-preview.redd.it/vBv-okyrg49DSIVthQaBT23Ru3QqmKPQXYKzfQD9KsA.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=f96628dcedb6dfe8373a7ba72fc01914112ec7db",
                      "width": 216,
                      "height": 141
                    },
                    {
                      "url": "https://external-preview.redd.it/vBv-okyrg49DSIVthQaBT23Ru3QqmKPQXYKzfQD9KsA.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d14d4cf489ba1bcdfd5862f3b8f6dbaeea8c7c58",
                      "width": 320,
                      "height": 210
                    },
                    {
                      "url": "https://external-preview.redd.it/vBv-okyrg49DSIVthQaBT23Ru3QqmKPQXYKzfQD9KsA.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=709438817cf5c2384a09d48db97515dedab8d0ad",
                      "width": 640,
                      "height": 420
                    },
                    {
                      "url": "https://external-preview.redd.it/vBv-okyrg49DSIVthQaBT23Ru3QqmKPQXYKzfQD9KsA.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=d188e7725b15b9d1f65e947070958505a4c324c4",
                      "width": 960,
                      "height": 630
                    }
                  ],
                  "variants": {},
                  "id": "8gFT4rhBxbczMB-fqoARZuZjw7fmCOMRSrDZHxkxXAM"
                }
              ],
              "enabled": false
            },
            "all_awardings": [],
            "awarders": [],
            "media_only": false,
            "can_gild": false,
            "spoiler": false,
            "locked": false,
            "author_flair_text": null,
            "treatment_tags": [],
            "visited": false,
            "removed_by": null,
            "num_reports": null,
            "distinguished": null,
            "subreddit_id": "t5_2qofe",
            "mod_reason_by": null,
            "removal_reason": null,
            "link_flair_background_color": "",
            "id": "iorzl6",
            "is_robot_indexable": true,
            "report_reasons": null,
            "author": "Babar7",
            "discussion_type": null,
            "num_comments": 0,
            "send_replies": true,
            "whitelist_status": "all_ads",
            "contest_mode": false,
            "mod_reports": [],
            "author_patreon_flair": false,
            "author_flair_text_color": null,
            "permalink": "/r/sweden/comments/iorzl6/hur_demokratier_dör_vad_säger_forskningen/",
            "parent_whitelist_status": "all_ads",
            "stickied": false,
            "url": "https://expo.se/2020/03/hur-demokratier-d%C3%B6r?fbclid=IwAR07bfrAnpQTlnqljBUkbftxBwKdFr59A_bgYfd4GsVvkrhwtkfRtlsYrEY",
            "subreddit_subscribers": 305685,
            "created_utc": 1599565114,
            "num_crossposts": 0,
            "media": null,
            "is_video": false
          }
        }
      ],
      "after": "t3_iorzl6",
      "before": null
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });
    injector = getTestBed();
    service = injector.get(HttpService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get request', () => {
   
    const subreddit = 'sweden';
    service.getRequest(`https://reddit.com/r/${subreddit}.json`).subscribe(listings => {
      expect(listings).toEqual(redditListingMockData);
    });

    const req = httpMock.expectOne('https://reddit.com/r/sweden.json');
    expect(req.request.method).toBe("GET");
    expect(req.request.responseType).toBe("json");

    req.flush(redditListingMockData);
  });

  it('get request CORS', () => {
   
    service.getRequestCORS('https://reddit.com/r/norway.json').subscribe(listings => {
      expect(listings).toEqual(redditListingMockData);
    });

    const req = httpMock.expectOne('https://cors-anywhere.herokuapp.com/https://reddit.com/r/norway.json');
    expect(req.request.method).toBe("GET");
    expect(req.request.responseType).toBe("json");

    req.flush(redditListingMockData);
  });
});
