import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {/* Welcome Text */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">Welcome Back!</h1>
                <p className="text-[#757575] text-base">Log in to your account</p>
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="email" value="Email Address" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email Address"
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Password"
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                    />
                    <span className="ml-2 text-sm text-[#757575]">
                        Remember me
                    </span>
                </div>

                <div className="space-y-4">
                    <PrimaryButton 
                        className="w-full justify-center py-3 text-base font-semibold" 
                        disabled={processing}
                    >
                        Log In
                    </PrimaryButton>

                    <div className="text-center space-y-2">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-[#058743] hover:text-[#046837] underline"
                            >
                                Forgot your password?
                            </Link>
                        )}
                        
                        <div className="text-sm text-[#757575]">
                            Don't have an account? 
                            <Link
                                href={route('register')}
                                className="text-[#058743] hover:text-[#046837] underline ml-1"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
