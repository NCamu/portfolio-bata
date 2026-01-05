import random
import sys
        from pathlib import Path
        #from english_words import get_english_words_set  # non utilisé
        print("")

        print("\t    .__===========================__.")
        print("\t .__\  .* HANGMAN telles no tales   /__.")
        print("\t \  /__===========================__\  /")
        print("\t./______\                       /______\.")
        print("")
        path=input("If you want use your own dictionary, enter now the  path of the file, else press Enter: ")

        def by_default(path) -> list[str]:
            #WORD_FILE = "/usr/share/dict/words"
            if not path:
                WORD_FILE = "/usr/share/dict/american-english"
                
                if Path(WORD_FILE).is_file():  # Convertir la chaîne en Path ici
                    with open(WORD_FILE, encoding="utf8", errors="ignore") as f:
                        english_words = {line.strip().lower() for line in f if line.strip()}
                    print("default dictionary loaded ok")
                else:
                    english_words = {'an', 'is', 'at', 'cat', 'dog',
                                    'four', 'three', 'seven', 'apple', 'house',
                                    'garden', 'monster', 'picture', 'welcome', 'balance',
                                    'understanding', 'responsibility', 'characteristic',
                                    'interpretation', 'extraordinary', 'beautiful',
                                    'deadline', 'mountain', 'together', 'software'}
                    print("contingency plan")
            else:
                WORD_FILE = path 
                print("your dictionary is used")
            with open(WORD_FILE, encoding="utf8", errors="ignore") as f:
                english_words = {line.strip().lower() for line in f if line.strip()}
            return list(english_words)  # retourner la liste des mots

        def difficultyLevel():
            print("  -choose a difficulty level-")
            print("\t1-Easy")
            print("\t2-Medium")
            print("\t3-Hard")
            print("\t4-Deadly")
            lvl=int(input("enter a number:"))
            if lvl==0:
                print('\tHo,You tried to screw me? this is the secret baaaaabbbbyyy level')
            elif lvl==1:
                print('\tyou choose Easy level')
            elif lvl==2:
                print('\tyou choose the Medium level')
            elif lvl==3:
                print('\tyou choose the Hard level, Good luck')
            elif lvl==4:
                rep=str(input("\tAre you crazy?, you didn't read the instructions? are you a kind of masochiste? 
                \n\t i have to ask you a confirmation!\n do you realy want play with this dificulty level?
                \n yes or no?")).lower()
                if rep=="yes" or rep=="y":
                    print("\tyou choose the Deadly level, you are a real masochiste")

                else:
                    print("\tI consider it's a no")
                    return difficultyLevel()
            else:
                print("\tYou clearly didn't read the instructions, try again")
                return difficultyLevel() 
            
            return lvl    



        def rand(words_set,lvl):
            nletter=[2,3,5,7,10,20]
            #print(difficultyLevel())
            maxLetter= nletter[lvl]
            shortlist= [i for i in words_set if len(i) <= maxLetter ]
            x = random.choice(shortlist)
            for i in range(len(x)):
                if not x[i].isalpha():  # Vérifier que chaque caractère est alphabétique
                    return rand(words_set,lvl)  # Si un caractère n'est pas alphabétique, choisir un autre mot
            return x

        # Appel de la fonction by_default pour récupérer la liste des mots
        words = by_default(path)
        lvl=difficultyLevel()
        rword = rand(words,lvl)
        #rword = "nico"
        penalties=0
        foundout=[]
        typed=[]
        def tilldeath(rword,penalties,foundout):


            #print(randwords)
            def affichage(n:int):

                png12 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","(",")",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","/","|","\\"],
                [" ","|"," "," ","|",""],
                [" ","|"," ","/","","`\\"],
                ["/","|","\\","","",""]
                ]

                png11 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","(",")",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","/","|","\\"],
                [" ","|"," "," ","|",""],
                [" ","|"," ","/","",""],
                ["/","|","\\","","",""]
                ]
                png10 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","(",")",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","/","|","\\"],
                [" ","|"," "," ","|",""],
                [" ","|","","","",""],
                ["/","|","\\","","",""]
                ]
                png9 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","(",")",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","/","","\\"],
                [" ","|","","","",""],
                [" ","|","",""," ",""],
                ["/","|","\\","","",""]
                ]
                png8 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","(",")",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","/","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                ["/","|","\\","","",""]
                ]
                png7 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","(",")",""],
                [" ","|"," "," ","|",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                ["/","|","\\","","",""]
                ]
                png6 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|"," ","(",")",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                ["/","|","\\","","",""]
                ]
                png5 = [
                [" ","","_","_","_",""],
                [" ","|"," "," ","|",""],
                [" ","|"," "," ","|",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                ["/","|","\\","","",""]
                ]
                png4 = [
                [" ","","_","_","_",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                ["/","|","\\","","",""]
                ]
                png3 = [
                [" ","","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                [" ","|","","","",""],
                ["/","|","\\","","",""]
                ]
                png2 = [
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["/","","\\","","",""]
                ]
                png1 = [
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["/","","","","",""]
                ]
                png0 = [
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""]
                ]
                tpng=[png0,png1,png2,png3,png4,png5,png6,png7,png8,png9,png10,png11,png12]

                aff=tpng[n]
                x=0
                while x<len(aff):
                    y=0
                    ligne =""
                    while y<len(aff[x]):
                        ligne+=aff[x][y]
                        y+=1
                    print(ligne)
                    x+=1
            #affichage(penalties)
            def lose(int:int,lvl):
                if int>=12:
                    print("You Lose")
                    if lvl==0:
                        print("\t LOOOOOOOOSER, even a blindfld chinpanzee with aids can does better than you")
                    elif lvl==4:
                        print("\t are you suffering as you expected?")
                    elif lvl==1:   
                        print("\t WTF, it's level one ?! you want to try the secret level:0 ?")
                    else:
                        print("\t Not so easy hmm !!!")    
                        
                    print("the word was: ",rword)
                    sys.exit()
                return
            lose(penalties,lvl)

            def underscores(string:str,foundout=foundout):
                for i in range(len(string)):
                    if not string[i] in foundout:
                        print("_ ",end="")
                    if string[i] in foundout:
                        print(string[i],end="")
                print("")

            underscores(rword)
            print("penalties: ",penalties)
            if penalties>0:
                print("already typed letters: ",typed)

            guess=input("Enter a letter,or the guess the word: ").lower()
            
            def win(foundout,rword,lvl):
                for i in rword:
                    if not i in foundout:
                        return False
                return True

            if guess==rword or win(foundout,rword,lvl):
                print("You Win")
                if lvl==0:
                    print("\t BIIIGGGG BBBOOOOYYYYY!!! ")
                elif lvl==4:
                    print("\t You liked the pain?")
                elif lvl==1:   
                    print("\t Easy peasy lemon squeezy")
                else:
                    print("\t CONGRATULATIONS !!!")
                return
            else:
                if len(guess)>1:
                    penalties+=5
                    affichage(penalties)
                    lose(penalties,lvl)
                    return tilldeath(rword,penalties,foundout)
                for i in range (len(rword)):
                    if guess==rword[i]:
                        if guess in foundout:
                            print("you already found this letter")
                            return tilldeath(rword,penalties,foundout)
                        foundout.append(guess)
                        if win(foundout,rword,lvl):
                            print("You Win")
                            if lvl==0:
                                print("\t BIIIGGGG BBBOOOOYYYYY!!! ")
                            elif lvl==4:
                                print("\t You liked the pain?")
                            elif lvl==1:   
                                print("\t Easy peasy lemon squeezy")
                            else:
                                print("\t CONGRATULATIONS !!!")
                                
                            return
                        return tilldeath(rword,penalties,foundout)
                
                penalties+=1
                affichage(penalties)
                lose(penalties,lvl)
                typed.append(guess)
                return tilldeath(rword,penalties,foundout)

        tilldeath(rword,penalties,foundout) 