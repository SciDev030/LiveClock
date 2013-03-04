/**
 * Language test and language system
 * @author Samsung Electronics
 * @since 2.0
 */
function getLanguage()
{    
    try
    {
        var languageOrganization = /^(en|de|fr|it|pl|tr)$/;
        var language = window.widget.sysInfo.getLanguage();
        return (languageOrganization.test(language)) ? language : "en";
    }
    catch(e)
    {
        return "en";
    }
}

function GetMessage(msgId)
{
	switch(getLanguage())
	{
		case "en":
			switch(msgId)
			{
				// settings
				case "sHead":                  								return "Settings";
				case "stringText":											return "Text";
				case "stringBorder":										return "Border";
				case "stringBackground":									return "Background";
				case "stringEffect":										return "Effects";
				case "stringDate":											return "Date";
				case "stringClock":											return "Clock";
				case "stringOptic":											return "Optic";
				case "stringSave":											return "Saving!\nPlease Wait";
				case "stringError":											return "Error E001:\nSettings to landscape mode is not available.n\Please change back to portrait mode!";
				case "ErrorColor":                  						return "Error E004:\nColor for background and text couldn't be the same. Please check the settings.";
				case "sColor":                  							return "Color:";
				case "sSize":                  								return "Size:";
				case "sRadius":												return "Radius:";
				case "sAlign":												return "Alignment:";
				case "sOpacity":                  							return "Opacity:";
				case "sStyle":												return "Style:";
				case "sGlass":                  							return "Glass:";
				case "sGlow":                  								return "Glow:";
				case "sGlowColor":                  						return "Glowcolor:";
				case "sYear":                  								return "Show Year:";
				case "sShort":                  							return "Shortview:";
				case "sShow":                  								return "Show:";
				case "sApply":                  							return "Apply";
				case "sClose":												return "Close";
				
				// values
				case "vNormal":                  							return "Normal";
				case "vBold":                  								return "Bold";
				case "vItalic":                  							return "Italic";
				case "vStrong":                  							return "Strong";
				case "vWeak":                  								return "Weak";				
				case "vLeft":                  								return "Left";
				case "vCenter":                  							return "Center";
				case "vRight":                  							return "Right";
				case "vBlack":                  							return "Black";
				case "vSilver":												return "Silver";
				case "vDeepskyblue":                  						return "Deepskyblue";
				case "vRoyalblue":                  						return "Royalblue";
				case "vGreen":                  							return "Green";
				case "vRed":                  								return "Red";
				case "vOrange":                  							return "Orange";
				case "vWhite":                  							return "White";
				case "vNavy":                  								return "Navy";
				case "vGray":                  								return "Gray";
				case "vYellow":                  							return "Yellow";
				case "vTeal":												return "Teal";
				case "vDeeppink":											return "Deeppink";
				case "vLimegreen":										    return "Limegreen";
				case "vBurlywood":											return "Burlywood";
				case "vFirebrick":											return "Firebrick";
				case "vPurple":												return "Purple";
				case "vBeige":												return "Beige";
				case "vChocolate":											return "Chocolate";
				case "vChartreuse":											return "Chartreuse";
				case "vLightCoral":											return "LightCoral";
				case "vOn":													return "on";
				case "vOff":												return "off";
				// time
				case "tMonday":												return "Monday";
				case "tTuesday":                  							return "Tuesday";
				case "tWednesday":                  						return "Wednesday";
				case "tThursday":                  							return "Thursday";
				case "tFriday":                  							return "Friday";
				case "tSaturday":                  							return "Saturday";
				case "tSunday":                  							return "Sunday";
				case "tJanuary":                  							return "January";
				case "tFebruary":                  							return "February";
				case "tMarch":                  							return "March";
				case "tApril":												return "April";
				case "tMay":												return "May";
				case "tJune":										    	return "June";
				case "tJuly":												return "July";
				case "tAugust":												return "August";
				case "tSeptember":											return "September";
				case "tOctober":											return "October";
				case "tNovember":											return "November";
				case "tDecember":											return "December";
				// time
				case "shortMon":											return "Mon.";
				case "shortTue":                  							return "Tue.";
				case "shortWed":                  							return "Wed.";
				case "shortThu":                  							return "Thu.";
				case "shortFri":                  							return "Fri.";
				case "shortSat":                  							return "Sat.";
				case "shortSun":                  							return "Sun.";
				case "shortJan":                  							return "Jan.";
				case "shortFeb":                  							return "Feb.";
				case "shortMar":                  							return "Mar.";
				case "shortApr":											return "Apr.";
				case "shortMay":											return "May";
				case "shortJun":										    return "Jun.";
				case "shortJul":											return "Jul.";
				case "shortAug":											return "Aug.";
				case "shortSep":											return "Sep.";
				case "shortOct":											return "Oct.";
				case "shortNov":											return "Nov.";
				case "shortDec":											return "Dec.";
				// passby
				case "update_available":									return "Update available";
				case "update_error":										return "Recheck for update";
				default:													return msgId;
		}
		break;
		
		case "de":
			switch(msgId)
			{
				// settings
				case "sHead":                  								return "Einstellungen";
				case "stringText":											return "Text";
				case "stringBorder":										return "Rahmen";
				case "stringBackground":									return "Hintergrund";
				case "stringEffect":										return "Effekte";
				case "stringDate":											return "Datum";
				case "stringClock":											return "Uhr";
				case "stringOptic":											return "Aussehen";
				case "stringSave":											return "Gespeichert!\nBitte Warten";
				case "stringError":											return "Error E001:\nEinstellungen sind im Landscape-Mode nicht verfügbar.\nWechseln Sie zurück in den Portrait-Mode!";
				case "ErrorColor":                  						return "Error E004:\nSchrift- und Hintergrundfarbe kann nicht die selbe sein!\nBitte Einstellungen überprüfen.";
				case "sColor":                  							return "Farbe:";
				case "sSize":                  								return "Größe:";
				case "sRadius":												return "Rundung:";
				case "sOpacity":                  							return "Deckkraft:";
				case "sAlign":												return "Ausrichtung:";
				case "sStyle":												return "Stil:";
				case "sGlass":                  							return "Glas:";
				case "sGlow":                  								return "Glüh:";
				case "sGlowColor":                  						return "Glühfarbe:";
				case "sYear":                  								return "Jahresanzeige:";
				case "sShort":                  							return "Kurzansicht:";
				case "sShow":                  								return "Anzeige:";
				case "sApply":                  							return "Übernehmen";
				case "sClose":												return "Schließen";
			
				// values
				case "vNormal":                  							return "Normal";
				case "vBold":                  								return "Fett";
				case "vItalic":                  							return "Kursiv";
				case "vStrong":                  							return "Stark";
				case "vWeak":                  								return "Schwach";		
				case "vLeft":                  								return "Links";
				case "vCenter":                  							return "Zentriert";
				case "vRight":                  							return "Rechts";
				case "vBlack":                  							return "Schwarz";
				case "vSilver":												return "Silber";
				case "vDeepskyblue":                  						return "Tiefes Himmelblau";
				case "vRoyalblue":                  						return "Königsblau";
				case "vGreen":                  							return "Grün";
				case "vRed":                  								return "Rot";
				case "vOrange":                  							return "Orange";
				case "vWhite":                  							return "Weiß";
				case "vNavy":                  								return "Marineblau";
				case "vGray":                  								return "Grau";
				case "vYellow":                  							return "Gelb";
				case "vTeal":												return "Türkis";
				case "vDeeppink":											return "Tiefespink";
				case "vLimegreen":										    return "Limettengrün";
				case "vBurlywood":											return "Holzfarbend";
				case "vFirebrick":											return "Ziegelrot";
				case "vPurple":												return "Lila";
				case "vBeige":												return "Beige";
				case "vChocolate":											return "Schokolade";
				case "vChartreuse":											return "Chartreuse";
				case "vLightCoral":											return "Zarte Koralle";
				case "vOn":													return "An";
				case "vOff":												return "Aus";
				// time
				case "tMonday":												return "Montag";
				case "tTuesday":                  							return "Dienstag";
				case "tWednesday":                  						return "Mittwoch";
				case "tThursday":                  							return "Donnerstag";
				case "tFriday":                  							return "Freitag";
				case "tSaturday":                  							return "Samstag";
				case "tSunday":                  							return "Sonntag";
				case "tJanuary":                  							return "Januar";
				case "tFebruary":                  							return "Februar";
				case "tMarch":                  							return "März";
				case "tApril":												return "April";
				case "tMay":												return "Mai";
				case "tJune":										    	return "Juni";
				case "tJuly":												return "Juli";
				case "tAugust":												return "August";
				case "tSeptember":											return "September";
				case "tOctober":											return "Oktober";
				case "tNovember":											return "November";
				case "tDecember":											return "Dezember";
				// time
				case "shortMon":											return "Mo.";
				case "shortTue":                  							return "Di.";
				case "shortWed":                  							return "Mi.";
				case "shortThu":                  							return "Do.";
				case "shortFri":                  							return "Fr.";
				case "shortSat":                  							return "Sa.";
				case "shortSun":                  							return "So.";
				case "shortJan":                  							return "Jan.";
				case "shortFeb":                  							return "Feb.";
				case "shortMar":                  							return "Mär.";
				case "shortApr":											return "Apr.";
				case "shortMay":											return "Mai";
				case "shortJun":										    return "Jun.";
				case "shortJul":											return "Jul.";
				case "shortAug":											return "Aug.";
				case "shortSep":											return "Sep.";
				case "shortOct":											return "Okt.";
				case "shortNov":											return "Nov.";
				case "shortDec":											return "Dez.";
				// passby
				case "update_available":									return "Update verfügbar";
				case "update_error":										return "Erneut prüfen";
				default:													return msgId;					
		}
		break;
		
		case "fr":
			switch(msgId)
			{
				// settings
				case "sHead":                  								return "Paramètres";
				case "stringText":											return "Texte";
				case "stringBorder":										return "Cadre";
				case "stringBackground":									return "Fond";
				case "stringEffect":										return "Effets";
				case "stringDate":											return "Date";
				case "stringClock":											return "Clock";
				case "stringOptic":											return "Optic";
				case "stringSave":											return "Saving!\nPlease Wait";
				case "stringError":											return "Error E001:\nParamètres ne sont pas disponibles en mode paysage.\nRevenez en mode portrait!";
				case "ErrorColor":                  						return "Error E004:\nCouleur de la police et la couleur de fond ne peut pas être la même chose!\nS'il vous plaît vérifier vos paramètres.";
				case "sColor":                  							return "Couleur:";
				case "sSize":                  								return "Epaisseur:";
				case "sOpacity":                  							return "Opacité:";
				case "sAlign":												return "Alignment:";
				case "sStyle":												return "Chic:";
				case "sRadius":												return "Radius:";
				case "sGlass":                  							return "Verre:";
				case "sGlow":                  								return "Lueur:";
				case "sGlowColor":                  						return "Couleur de la lueur:";
				case "sYear":                  								return "Show Year:";
				case "sShort":                  							return "Shortview:";
				case "sShow":												return "Montrer";
				case "sApply":                  							return "Appliquer";
				case "sClose":												return "Fermer";
		
				// values
				case "vNormal":                  							return "Normal";
				case "vBold":                  								return "Bold";
				case "vItalic":                  							return "Italic";
				case "vStrong":                  							return "Strong";
				case "vWeak":                  								return "Weak";
				case "vLeft":                  								return "Left";
				case "vCenter":                  							return "Center";
				case "vRight":                  							return "Right";
				case "vBlack":                  							return "Noire";
				case "vSilver":												return "Argent";
				case "vDeepskyblue":                  						return "Ciel bleu";
				case "vRoyalblue":                  						return "Bleu royal";
				case "vGreen":                  							return "Vert";
				case "vRed":                  								return "Rouge";
				case "vOrange":                  							return "Orange";
				case "vWhite":                  							return "Blanc";
				case "vNavy":                  								return "Bleu marine";
				case "vGray":                  								return "Gris";
				case "vYellow":                  							return "Jaune";
				case "vTeal":												return "Sarcelle";
				case "vDeeppink":											return "Rose";
				case "vLimegreen":										    return "Vert lime";
				case "vBurlywood":											return "De bois";
				case "vFirebrick":											return "Brique-rouge";
				case "vPurple":												return "Pourpre";
				case "vBeige":												return "Beige";
				case "vChocolate":											return "Chocolat";
				case "vChartreuse":											return "Chartreuse";
				case "vLightCoral":											return "Corail";
				case "vOn":													return "Actifs";
				case "vOff":												return "Inactifs";
				// time
				case "tMonday":												return "Lundi";
				case "tTuesday":                  							return "Mardi";
				case "tWednesday":                  						return "Mercredi";
				case "tThursday":                  							return "Jeudi";
				case "tFriday":                  							return "Vendredi";
				case "tSaturday":                  							return "Samedi";
				case "tSunday":                  							return "Dimanche";
				case "tJanuary":                  							return "Janvier";
				case "tFebruary":                  							return "Février";
				case "tMarch":                  							return "De Mars";
				case "tApril":												return "Avril";
				case "tMay":												return "Mai";
				case "tJune":										    	return "Juin";
				case "tJuly":												return "Juillet";
				case "tAugust":												return "Août";
				case "tSeptember":											return "Septembre";
				case "tOctober":											return "Octobre";
				case "tNovember":											return "Novembre";
				case "tDecember":											return "Décembre";
				// time
				case "shortMon":											return "Lun.";
				case "shortTue":                  							return "Mar.";
				case "shortWed":                  							return "Mer.";
				case "shortThu":                  							return "Jeu.";
				case "shortFri":                  							return "Ven";
				case "shortSat":                  							return "Sam.";
				case "shortSun":                  							return "Dim.";
				case "shortJan":                  							return "Jan.";
				case "shortFeb":                  							return "Fév.";
				case "shortMar":                  							return "Mar.";
				case "shortApr":											return "Avr.";
				case "shortMay":											return "Mai";
				case "shortJun":										    return "Juin";
				case "shortJul":											return "Jui.";
				case "shortAug":											return "Mda.";
				case "shortSep":											return "Sep.";
				case "shortOct":											return "Oct.";
				case "shortNov":											return "Nov.";
				case "shortDec":											return "Déc.";
				// passby
				case "update_available":									return "Update available";
				case "update_error":										return "Recheck for update";
				default:													return msgId;					
		}
		break;
		
		case "it":
			switch(msgId)
			{
				// settings
				case "sHead":                  								return "Impostazioni";
				case "stringText":											return "Testo";
				case "stringBorder":										return "Bordo";
				case "stringBackground":									return "Sfondo";
				case "stringEffect":										return "Effetti";
				case "stringDate":											return "Data";
				case "stringClock":											return "Orologio";
				case "stringOptic":											return "Ottico";
				case "stringSave":											return "Salvataggio!\nAttendere";
				case "stringError":											return "Errore E001:\nLe impostazioni per la modalità  landscape non sono disponibili.n\Per favore, torna alla modalità  portrait!";
				case "ErrorColor":                  						return "Errore E004:\nI colori per lo sfondo e per il testo non possono essere gli stessi. Per favore, controlla nuovamente le impostazioni.";
				case "sColor":                  							return "Colore:";
				case "sSize":                  								return "Dimensione:";
				case "sRadius":												return "Raggio:";
				case "sAlign":												return "Allineamento:";
				case "sOpacity":                  							return "Opacità:";
				case "sStyle":												return "Stile:";
				case "sGlass":                  							return "Glass:";
				case "sGlow":                  								return "Splendore:";
				case "sGlowColor":                  						return "Lucentezza del Colore:";
				case "sYear":                  								return "Mostra Anno:";
				case "sShort":                  							return "Shortview:";
				case "sShow":                  								return "Mostra:";
				case "sApply":                  							return "Applica";
				case "sClose":												return "Chiudi";
				// values
				case "vNormal":                  							return "Normale";
				case "vBold":                  								return "Grassetto";
				case "vItalic":                  							return "Corsivo";
				case "vStrong":                  							return "Forte";
				case "vWeak":                  								return "Debole";				
				case "vLeft":                  								return "Sinistra";
				case "vCenter":                  							return "Centro";
				case "vRight":                  							return "Destra";
				case "vBlack":                  							return "Nero";
				case "vSilver":												return "Argento";
				case "vDeepskyblue":                  						return "DeepSkyBlue";
				case "vRoyalblue":                  						return "Royalblue";
				case "vGreen":                  							return "Verde";
				case "vRed":                  								return "Rosso";
				case "vOrange":                  							return "Arancione";
				case "vWhite":                  							return "Bianco";
				case "vNavy":                  								return "Navy";
				case "vGray":                  								return "Grigio";
				case "vYellow":                  							return "Giallo";
				case "vTeal":												return "Teal";
				case "vDeeppink":											return "Rosa";
				case "vLimegreen":										    return "Verde Limone";
				case "vBurlywood":											return "Burlywood";
				case "vFirebrick":											return "Firebrick";
				case "vPurple":												return "Porpora";
				case "vBeige":												return "Beige";
				case "vChocolate":											return "Chocolate";
				case "vChartreuse":											return "Chartreuse";
				case "vLightCoral":											return "LightCoral";
				case "vOn":													return "on";
				case "vOff":												return "off";
				// time
				case "tMonday":												return "Lunedì";
				case "tTuesday":                  							return "Martedì";
				case "tWednesday":                  						return "Mercoledì";
				case "tThursday":                  							return "Giovedì";
				case "tFriday":                  							return "Venerdì";
				case "tSaturday":                  							return "Sabato";
				case "tSunday":                  							return "Domenica";
				case "tJanuary":                  							return "Gennaio";
				case "tFebruary":                  							return "Febbraio";
				case "tMarch":                  							return "Marzo";
				case "tApril":												return "Aprile";
				case "tMay":												return "Maggio";
				case "tJune":										    	return "Giugno";
				case "tJuly":												return "Luglio";
				case "tAugust":												return "Agosto";
				case "tSeptember":											return "Settembre";
				case "tOctober":											return "Ottobre";
				case "tNovember":											return "Novembre";
				case "tDecember":											return "Dicembre";
				// time
				case "shortMon":											return "Lun.";
				case "shortTue":                  							return "Mar.";
				case "shortWed":                  							return "Mer.";
				case "shortThu":                  							return "Gio.";
				case "shortFri":                  							return "Ven.";
				case "shortSat":                  							return "Sab.";
				case "shortSun":                  							return "Dom.";
				case "shortJan":                  							return "Gen.";
				case "shortFeb":                  							return "Feb.";
				case "shortMar":                  							return "Mar.";
				case "shortApr":											return "Apr.";
				case "shortMay":											return "Mag.";
				case "shortJun":										    return "Giu.";
				case "shortJul":											return "Lug.";
				case "shortAug":											return "Ago.";
				case "shortSep":											return "Set.";
				case "shortOct":											return "Ott.";
				case "shortNov":											return "Nov.";
				case "shortDec":											return "Dic.";
				// passby
				case "update_available":									return "Update available";
				case "update_error":										return "Recheck for update";
				default:													return msgId;					
		}
		break;

		case "pl":
			switch(msgId)
			{
				// settings
            	case "sHead":                                               return "Ustawienia";
            	case "stringText":                                          return "Tekst";
            	case "stringBorder":                                        return "Obramowanie";
            	case "stringBackground":                                    return "Tło";
            	case "stringEffect":                                        return "Efekty";
            	case "stringDate":                                          return "Data";
            	case "stringClock":                                         return "Zegar";
            	case "stringOptic":                                         return "Optyka";
            	case "stringSave":                                          return "Zapisywanie!\nProszę Czekać";
            	case "stringError":                                         return "Błąd E001:\nUstawienie trybu poziomego jest niemożliwe.n\Proszę zmienić na tryb pionowy!";
            	case "ErrorColor":                                          return "Błąd E004:\nKolor tła i tekstu nie może być taki sam. Proszę sprawdzić ustawienia.";
            	case "sColor":                                              return "Kolor:";
            	case "sSize":                                               return "Rozmiar:";
            	case "sRadius":                                             return "Promień:";
            	case "sAlign":                                              return "Wyrównanie:";
            	case "sOpacity":                                            return "Przeźroczystość:";
            	case "sStyle":                                              return "Styl:";
            	case "sGlass":                                              return "Szklany:";
            	case "sGlow":                                               return "Poświata:";
            	case "sGlowColor":                                          return "Poświata:";
            	case "sYear":                                               return "Pokaż rok:";
            	case "sShort":                                              return "Podgląd:";
            	case "sShow":                                               return "Pokaż:";
            	case "sApply":                                              return "Apply";
            	case "sClose":                                              return "Close";
            	// values
            	case "vNormal":                                             return "Standardowo";
            	case "vBold":                                               return "Pogrubienie";
            	case "vItalic":                                             return "Kursywa";
            	case "vStrong":                                             return "Mocny";
            	case "vWeak":                                               return "Słaby";                                
            	case "vLeft":                                               return "Lewo";
            	case "vCenter":                                             return "Centralnie";
            	case "vRight":                                              return "Prawo";
            	case "vBlack":                                              return "Czarny";
            	case "vSilver":                                             return "Srebrny";
            	case "vDeepskyblue":                                        return "Głęboki błękitny";
            	case "vRoyalblue":                                          return "Granatowy";
            	case "vGreen":                                              return "Zielony";
            	case "vRed":                                                return "Czerwony";
            	case "vOrange":                                             return "Pomarańczowy";
            	case "vWhite":                                              return "Biały";
            	case "vNavy":                                               return "Ciemna zieleń";
            	case "vGray":                                               return "Szary";
            	case "vYellow":                                             return "Żółty";
            	case "vTeal":                                               return "Teal";
            	case "vDeeppink":                                           return "Głęboki różowy";
            	case "vLimegreen":                                          return "Limonkowy";
            	case "vBurlywood":                                          return "Drewniany";
            	case "vFirebrick":                                          return "Czerwona cegła";
            	case "vPurple":                                             return "Fioletowy";
            	case "vBeige":                                              return "Beżowy";
            	case "vChocolate":                                          return "Czekoladowy";
            	case "vChartreuse":                                         return "Szmaragdowy";
            	case "vLightCoral":                                         return "Koralowy";
            	case "vOn":                                                 return "Wł";
            	case "vOff":                                                return "Wył";
            	// time
            	case "tMonday":                                             return "Piątek";
            	case "tTuesday":                                            return "Wtorek";
            	case "tWednesday":                                          return "Środa";
            	case "tThursday":                                           return "Czwartek";
            	case "tFriday":                                             return "Piątek";
            	case "tSaturday":                                           return "Sobota";
            	case "tSunday":                                             return "Niedziela";
            	case "tJanuary":                                            return "Styczeń";
            	case "tFebruary":                                           return "Luty";
            	case "tMarch":                                              return "Marzec";
            	case "tApril":                                              return "Kwiecień";
            	case "tMay":                                                return "Maj";
            	case "tJune":                                               return "Czerwiec";
            	case "tJuly":                                               return "Lipiec";
            	case "tAugust":                                             return "Sierpień";
            	case "tSeptember":                                          return "Wrzesień";
            	case "tOctober":                                            return "Październik";
            	case "tNovember":                                           return "Listopad";
            	case "tDecember":                                           return "Grudzień";
            	// time
            	case "shortMon":                                            return "Pon.";
            	case "shortTue":                                            return "Wto.";
            	case "shortWed":                                            return "Śro.";
            	case "shortThu":                                            return "Czw.";
            	case "shortFri":                                            return "Pią.";
            	case "shortSat":                                            return "Sob.";
            	case "shortSun":                                            return "Nie.";
            	case "shortJan":                                            return "Sty.";
            	case "shortFeb":                                            return "Lut.";
            	case "shortMar":                                            return "Mar.";
            	case "shortApr":                                            return "Kwi.";
                case "shortMay":                                            return "Maj.";
                case "shortJun":                                            return "Cze.";
            	case "shortJul":                                            return "Lip.";
            	case "shortAug":                                            return "Sie.";
            	case "shortSep":                                            return "Wrz.";
            	case "shortOct":                                            return "Paź.";
            	case "shortNov":                                            return "Lis.";
            	case "shortDec":                                            return "Gru.";
				// passby
            	case "update_available":									return "Update available";
            	case "update_error":										return "Recheck for update";
				default:													return msgId;					
		}
		break;
		
		case "tr":
			switch(msgId)
			{
				// settings
				case "sHead":                  								return "Ayarlar";
				case "stringText":											return "Metin";
				case "stringBorder":										return "Sınır";
				case "stringBackground":									return "Arka Plan";
				case "stringEffect":										return "Efektler";
				case "stringDate":											return "Tarih";
				case "stringClock":											return "Saat";
				case "stringOptic":											return "Optik";
				case "stringSave":											return "Kaydediliyor!\nLütfen Bekleyiniz";
				case "stringError":											return "Error E001:\nLandscape Modu ayarı desteklenmiyor.n\Lütfen dikey moda geri değiştirin!";
				case "ErrorColor":                  						return "Error E004:\nArka Plan ve Metin rengi aynı  olamaz. Lütfen ayarları kontrol ediniz.";
				case "sColor":                  							return "Renk:";
				case "sSize":                  								return "Boyut:";
				case "sRadius":												return "Çevre:";
				case "sAlign":												return "Hizalama:";
				case "sOpacity":                  							return "Opaklık:";
				case "sStyle":												return "Stil:";
				case "sGlass":                  							return "Cam:";
				case "sGlow":                  								return "Parıltı:";
				case "sGlowColor":                  						return "Parıltı Rengi:";
				case "sYear":                  								return "yılı Göster:";
				case "sShort":                  							return "Shortview:";
				case "sShow":                  								return "Göster:";
				case "sApply":                  							return "Uygula";
				case "sClose":												return "Kapat";
				
				// values
				case "vNormal":                  							return "Normal";
				case "vBold":                  								return "Kalın";
				case "vItalic":                  							return "Italik";
				case "vStrong":                  							return "Sert";
				case "vWeak":                  								return "Weak";				
				case "vLeft":                  								return "Sol";
				case "vCenter":                  							return "Merkez";
				case "vRight":                  							return "SaÄ";
				case "vBlack":                  							return "Siyah";
				case "vSilver":												return "Gümüş";
				case "vDeepskyblue":                  						return "Koyu Mavi";
				case "vRoyalblue":                  						return "AÃ§Ä±k Mavi";
				case "vGreen":                  							return "Yeşil";
				case "vRed":                  								return "Kırmızı";
				case "vOrange":                  							return "Turuncu";
				case "vWhite":                  							return "Beyaz";
				case "vNavy":                  								return "Deniz Mavisi";
				case "vGray":                  								return "Gri";
				case "vYellow":                  							return "Sarı";
				case "vTeal":												return "Kahverengi";
				case "vDeeppink":											return "Koyu Pembe";
				case "vLimegreen":										    return "Kireç Yeşili";
				case "vBurlywood":											return "Tahta Rengi";
				case "vFirebrick":											return "Ateş Tuğlası";
				case "vPurple":												return "Mor";
				case "vBeige":												return "Bej";
				case "vChocolate":											return "Cikolata";
				case "vChartreuse":											return "Chartreuse";
				case "vLightCoral":											return "Işık Mercan";
				case "vOn":													return "Yanık";
				case "vOff":												return "Kapalı";
				// 	time
				case "tMonday":												return "Pazartesi";
				case "tTuesday":                  							return "Salı";
				case "tWednesday":                  						return "Çarşamba";
				case "tThursday":                  							return "Perşembe";
				case "tFriday":                  							return "Cuma";
				case "tSaturday":                  							return "Cumartesi";
				case "tSunday":                  							return "Pazar";
				case "tJanuary":                  							return "Ocak";
				case "tFebruary":                  							return "Şubat";
				case "tMarch":                  							return "Mart";
				case "tApril":												return "Nisan";
				case "tMay":												return "Mayıs";
				case "tJune":										    	return "Hazirian";
				case "tJuly":												return "Temmuz";
				case "tAugust":												return "Ağustos";
				case "tSeptember":											return "Eylül";
				case "tOctober":											return "Ekim";
				case "tNovember":											return "Kasım";
				case "tDecember":											return "Aralık";
				// time
				case "shortMon":											return "Pzt.";
				case "shortTue":                  							return "Sal.";
				case "shortWed":                  							return "Çrş.";
				case "shortThu":                  							return "Prş.";
				case "shortFri":                  							return "Cum.";
				case "shortSat":                  							return "Cts.";
				case "shortSun":                  							return "Paz.";
				case "shortJan":                  							return "Ock.";
				case "shortFeb":                  							return "Şub.";
				case "shortMar":                  							return "Mar.";
				case "shortApr":											return "Nis.";
				case "shortMay":											return "May.";
				case "shortJun":										    return "Haz.";
				case "shortJul":											return "Tem.";
				case "shortAug":											return "Ağs.";
				case "shortSep":											return "Eyl.";
				case "shortOct":											return "Ekm.";
				case "shortNov":											return "Kas.";
				case "shortDec":											return "Ark.";
				// passby
				case "update_available":									return "Update available";
				case "update_error":										return "Recheck for update";
				default:													return msgId;					
		}
		break;
	}
}