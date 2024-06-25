import serial, time

def buscaDados():

    try:
        conn = serial.Serial('COM5',9600)

        print("conectado com a porta, ", conn.portstr)

        while True:
            
            if conn.in_waiting > 0:
                dados = conn.readline().decode().strip()  # Lê os dados da porta serial
                return int(dados)

    except serial.SerialException:
         return print("Porta USB não encontrada")



