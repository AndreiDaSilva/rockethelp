import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logo_primary.svg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export function SignIn() {

    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { colors } = useTheme();

    function handleSingIn() {
        if (!email && !password) {
            return Alert.alert('Entrar', 'Informe email e senha!')
        } else if (!email) {
            return Alert.alert('Entrar', 'Informe um email!')
        } else if (!password) {
            return Alert.alert('Entrar', 'Informe um senha!');
        }

        setIsLoading(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .catch((erro) => {
                console.log(erro);
                setIsLoading(false);

                if (erro.code == 'auth/invalid-email') {
                    return Alert.alert('Erro', 'E-mail inválido.')
                }
                if (erro.code == 'auth/user-not-found') {
                    return Alert.alert('Erro', 'E-mail ou senha inválido.')
                }
                if (erro.code == 'auth/wrong-password') {
                    return Alert.alert('Erro', 'E-mail ou senha inválido.')
                }

                return Alert.alert('Erro', "Não foi possível entrar")


            });
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input
                mb={4}
                placeholder="E-mail"
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setEmail}
            />
            <Input
                mb={8}
                placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                onChangeText={setPassword}
            />

            <Button
                title="Entrar"
                w="full"
                onPress={handleSingIn}
                isLoading={isLoading}
            />

        </VStack>
    );
}
