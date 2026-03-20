import shelve
while True:
    escolha = int(input(f"O que deseja fazer?/n1 Registrar/n2 Listar/n3 Sair"))
    if escolha == 3:
        break
    elif escolha == 1:
        nome = input("Digite sue nome: ")
        matricula = int(input("Digite o id da sua matrícula: "))
        with shelve.open('./banco.db') as arq:
            User = {'nome': nome, 'matricula': matricula}