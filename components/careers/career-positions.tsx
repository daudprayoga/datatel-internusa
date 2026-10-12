"use client"

import { useState } from "react"
import { X, Send, CheckCircle2, Briefcase, MapPin, Clock } from "lucide-react"
import { jobOpenings, type JobOpening } from "@/lib/careers-data"

export function CareerPositionsList() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null)

  return (
    <div>
      {/* 3-Column Card Grid matching reference layout, styled with site theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {jobOpenings.map((job) => (
          <div
            key={job.id}
            className="rounded-2xl bg-white border border-slate-200/90 hover:border-sb-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              {/* Title & Job Type */}
              <h3
                onClick={() => setSelectedJob(job)}
                className="text-base sm:text-[1.05rem] font-bold text-slate-900 hover:text-sb-primary cursor-pointer transition-colors leading-snug"
              >
                {job.title} | {job.jobType}
              </h3>

              {/* Location */}
              <p className="text-xs sm:text-sm text-sb-muted mt-1">
                {job.location}
              </p>
            </div>

            {/* Bottom info & Lamar button */}
            <div className="mt-8 sm:mt-10">
              <p className="text-xs sm:text-sm text-sb-body mb-3.5 font-medium">
                {job.category}
              </p>

              <button
                type="button"
                onClick={() => setSelectedJob(job)}
                className="inline-block px-5 py-2 rounded-xl bg-sb-primary hover:bg-sb-primary-dark active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                Lamar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination text matching reference image */}
      <div className="text-center text-xs sm:text-sm text-sb-muted mt-10">
        Showing 1/1 of pages. {jobOpenings.length} entries.
      </div>

      {/* Modal Detail & Apply Form */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-sb-navy rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[0.72rem] font-bold bg-sb-soft-primary text-sb-primary border border-sb-pale-primary mb-2">
                {selectedJob.category}
              </span>
              <h3 className="text-xl font-bold text-sb-navy">
                {selectedJob.title} | {selectedJob.jobType}
              </h3>
              <div className="flex items-center gap-4 mt-1.5 text-xs text-sb-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {selectedJob.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {selectedJob.experience}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="text-xs sm:text-sm text-sb-body leading-relaxed border-t border-slate-100 pt-4">
              <h4 className="font-bold text-sb-navy mb-1.5">Deskripsi Pekerjaan:</h4>
              <p>{selectedJob.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-sb-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sb-primary" />
                Tanggung Jawab Utama:
              </h4>
              <ul className="space-y-1.5 text-xs text-sb-body pl-2">
                {selectedJob.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sb-primary mt-1.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-sb-navy flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                Kualifikasi &amp; Persyaratan:
              </h4>
              <ul className="space-y-1.5 text-xs text-sb-body pl-2">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-sb-muted text-center sm:text-left">
                recruitment@datatel-internusa.com
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-200 text-sb-body text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  Tutup
                </button>

                <a
                  href={`mailto:recruitment@datatel-internusa.com?subject=Lamaran Kerja: ${encodeURIComponent(
                    selectedJob.title
                  )} - [Nama Anda]&body=Halo Tim HRD PT. Datatel Inter Nusa,%0D%0A%0D%0ASaya bermaksud mengajukan lamaran untuk posisi ${encodeURIComponent(
                    selectedJob.title
                  )} (${encodeURIComponent(
                    selectedJob.jobType
                  )}).%0D%0ABerikut terlampir CV dan portofolio pendukung saya.%0D%0A%0D%0ATerima kasih.`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-sb-primary hover:bg-sb-primary-dark text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Lamaran (Email)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
